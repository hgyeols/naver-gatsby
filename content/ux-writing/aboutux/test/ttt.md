---
title: 'TEST Title + down' # TITLE 영역에 표시
part: 'UX Writing' # LNB part
template: 'withDownload' # (Title + Download)인 템플릿입니다!
order: '2' # readme.md 참조
metaTitle: '브라우저 탭에 표시' # metadata
metaDescription: 'metaDescription' # metadata
titleDescription: 'NDS는 모바일 해상도, PC Web 등 사용자가 서비스를 사용하는 모든 서비스를 제공하는 것을 목적으로 합니다' # title 밑에 나오는 문장
---

<titleDownload 
  logo1="sketch"
  title1="Sketch Design Kit"
  link1="https://github.com/git-for-windows/git/releases/download/v2.32.0.windows.1/Git-2.32.0-64-bit.exe"
  logo2="figma"
  title2="Figma Design Kit"
  link2="https://github.com/git-for-windows/git/releases/download/v2.32.0.windows.1/Git-2.32.0-64-bit.exe"
  logo3="lottie"
  title3="dd Design Kit"
  link3="https://github.com/git-for-windows/git/releases/download/v2.32.0.windows.1/Git-2.32.0-64-bit.exe"
  logo4="PDF"
  title4="ddd Design Kit"
  link4="https://github.com/git-for-windows/git/releases/download/v2.32.0.windows.1/Git-2.32.0-64-bit.exe"
  logo5="PSD"
  title5="dddd Design Kit"
  link5="https://github.com/git-for-windows/git/releases/download/v2.32.0.windows.1/Git-2.32.0-64-bit.exe"
/>

<br10/>

---

이 템플릿에서는 frontmatter로 download 쪽 옵션을 넣기가 너무 복잡하기 때문에  
직접 본문에 custom function을 입력하도록 구성했습니다.

위처럼 작업하시면 figma와 같아집니다. 위의 frontmatter에서 **template: 'withDownload'** 꼭 이렇게 해야 합니다.

각 다운로드 요소 아래에 24px 마진이 생기며, `<br10/>` 을 통해 10px을 추가로 넣어주면 hr과의 간격이 figma와 동일해집니다.

모바일에서는 두줄로 변경됩니다.
