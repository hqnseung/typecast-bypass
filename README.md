# 타입캐스트 TTS 워터마크 우회 다운로더 (교육용)

이 레포지토리는 타입캐스트(Typcast) TTS(Text-to-Speech) 서비스에서 생성된 음성 미리듣기에서 워터마크 음악을 우회하여 음성 데이터를 추출하는 다운로더입니다. 이 프로젝트는 보안 교육, 저작권 침해의 위험성을 이해하고 방지하기 위한 용도로만 사용해야 합니다.

## 📋 목차
- [프로젝트 개요](#프로젝트-개요)
- [설치 방법](#설치-방법)
- [사용 방법](#사용-방법)
- [주의사항](#주의사항)
- [라이센스](#라이센스)

## 프로젝트 개요
이 프로젝트는 타입캐스트의 워터마크 음악 재생방식 취약점을 분석하여, 워터마크 음악을 제거하여 미리듣기 음성 파일을 다운로드 받는 다운로더를 구현한 것입니다. 코드를 실행하고 미리듣기를 재생하면 워터마크 음악이 제거된 음성파일이 다운로드 됩니다.


## 설치 방법
1. 이 레포지토리를 클론합니다:
    ```bash
    git clone https://github.com/hqnseung/typecast-bypass.git
    ```
2. 프로젝트 디렉토리로 이동합니다:
    ```bash
    cd typecast-bypass
    ```
3. 필요한 패키지를 설치합니다:
    ```bash
    npm install
    ```

## 사용 방법
1. 코드를 실행합니다. 자동으로 크롬 새로운 창이 타입캐스트 대시보드 웹페이지으로 열립니다.
    ```bash
    npm start
    ```
2. 열린 타입캐스트 대시보드 웹페이지에서 다운로드 하고자 하는 프로젝트에 들어갑니다.
3. 음성 미리듣기를 처음부터 재생합니다.
4. 폴더의 /download 폴더에 워터마크 음악이 제거된 음성파일이 재생된 순서대로 저장됩니다.


## 주의사항
- 이 프로그램은 교육 및 연구 목적 외에는 사용하지 마십시오.
- 이 프로젝트를 통해 보안 교육, 저작권 침해의 위험성을 이해하고 방지 방법을 배우는 데 중점을 두어야 합니다.
- 본 스크립트는 연구, 교육적인 용도로만 제공되며, 상업적 목적이나 불법적인 용도로 사용해서는 안 됩니다.
- TTS 서비스의 저작권 및 서비스 약관을 준수해야 합니다.
- 워터마크 음악 무단삭제는 타입캐스트 이용약관에 위배되며, 이를 실제로 시행할 경우 법적 책임이 따를 수 있습니다.

## 라이센스

이 프로젝트는 MIT 라이센스 하에 배포됩니다. 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.
