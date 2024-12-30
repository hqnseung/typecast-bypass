const puppeteer = require('puppeteer');
const axios = require('axios');
const fs = require('fs');
const path = require('path');

(async () => {
  const { default: chalk } = await import('chalk'); 

  const getCurrentTime = () => {
    const now = new Date();
    return `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;
  };

  const log = (message) => {
    console.log(chalk.blueBright(`[`) + chalk.white(getCurrentTime()) + chalk.blueBright(`]`) + ' ' + chalk.white(message));
  };

  const browser = await puppeteer.connect({
    browserURL: 'http://127.0.0.1:9222',
  });

  const targetPage = await browser.newPage();
  await targetPage.goto('https://app.typecast.ai/ko/dashboard');

  log('새 창이 열렸습니다.');

  const viewportSize = await targetPage.evaluate(() => ({
    width: window.outerWidth,
    height: window.outerHeight
  }));

  const maxHeight = 1200;
  const adjustedHeight = viewportSize.height > maxHeight ? maxHeight : viewportSize.height;

  await targetPage.setViewport({
    width: viewportSize.width,
    height: adjustedHeight - 100
  });

  const createDownloadFolder = async () => {
    const currentUrl = await targetPage.url();

    const folderName = currentUrl.split('/').pop();
    const folderPath = path.join(__dirname, 'download', folderName);

    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath, { recursive: true });
    }

    return folderPath;
  };

  async function downloadMedia(url, folderPath, index) {
    try {
      const response = await axios({
        method: 'get',
        url: url,
        responseType: 'stream',
      });

      const fileName = `${index}.wav`;
      const filePath = path.resolve(folderPath, fileName);
      response.data.pipe(fs.createWriteStream(filePath));

      log(chalk.greenBright(`다운로드 완료: `) + chalk.gray(filePath));
      console.log("===================================================")
    } catch (error) {
      log(chalk.redBright(`다운로드 실패: `) + chalk.gray(error));
    }
  }

  let fileIndex = 1;
  targetPage.on('response', async (response) => {
    const contentType = response.headers()['content-type'];
    const requestUrl = response.url();

    if (contentType?.includes('audio/') || requestUrl.endsWith('.wav')) {
      if (requestUrl.startsWith('https://cdn.typecast.ai/data/')) {
        log(`미디어 파일 발견: ` + chalk.gray(requestUrl));

        const folderPath = await createDownloadFolder();

        await downloadMedia(requestUrl, folderPath, fileIndex);
        fileIndex++;
      }
    }
  });

  log('네트워크 요청 모니터링 시작');
  console.log("===================================================")
})();
