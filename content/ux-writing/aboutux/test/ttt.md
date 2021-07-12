---
title: 'TEST Title + down' # TITLE 영역에 표시
part: 'UX Writing' # LNB part
template: 'withDownload' # (Title + Download)인 템플릿입니다!
order: '6' # readme.md 참조
metaTitle: '브라우저 탭에 표시' # metadata
metaDescription: 'metaDescription' # metadata
titleDescription: 'NDS는 모바일 해상도, PC Web 등 사용자가 서비스를 사용하는 모든 서비스를 제공하는 것을 목적으로 합니다' # title 밑에 나오는 문장
---

<titleDownload 
  logo1="sketch"
  title1="Sketch Design Kit 1"
  link1="https://github.com/git-for-windows/git/releases/download/v2.32.0.windows.1/Git-2.32.0-64-bit.exe"
  logo6="figma"
  title6="Figma Design Kit 2"
  link6="https://github.com/git-for-windows/git/releases/download/v2.32.0.windows.1/Git-2.32.0-64-bit.exe"
  logo3="lottie"
  title3="lottie Design Kit 3"
  link3="https://github.com/git-for-windows/git/releases/download/v2.32.0.windows.1/Git-2.32.0-64-bit.exe"
  logo4="PDF"
  title4="PDF Design Kit 4"
  link4="https://github.com/git-for-windows/git/releases/download/v2.32.0.windows.1/Git-2.32.0-64-bit.exe"
  logo5="PSD"
  title5="PSD Design Kit 5"
  link5="https://github.com/git-for-windows/git/releases/download/v2.32.0.windows.1/Git-2.32.0-64-bit.exe"
/>

<br10/>

---

<br1/>

이 템플릿에서는 frontmatter로 download 쪽 옵션을 넣기가 너무 복잡하기 때문에  
직접 본문에 custom function을 입력하도록 구성했습니다.

- 위의 frontmatter에서 **template: 'withDownload'** 로 해주셔야 일반 페이지와 다른 디자인이 적용됩니다.
- 본문에서 `<titleDownload /> ` 커스텀 펑션을 사용하시면 됩니다.
- 변수로는 `logo`, `title`, `link`가 들어갑니다.
- 뒤에 붙는 1,2,3.. 의 숫자는 사실 큰 상관없습니다. 각 요소마다 서로 다르기만 하면 됩니다. 화면에는 윗쪽의 변수부터 표시됩니다.

```html
<titleDownload
  logo0="sketch"
  title0="Sketch Design Kit 1"
  link0="#"
  logo6="figma"
  title6="Figma Design Kit 2"
  link6="#"
  logo3="lottie"
  title3="lottie Design Kit 3"
  link3="#"
  logo1="PDF"
  title1="PDF Design Kit 4"
  link1="#"
/>
```

<br2/>

- 즉 위처럼 뒤의 숫자는 구분하는 용도이므로 꼭 내림차순이 아니어도됩니다.
- 다만 뒤의 숫자는 꼭 들어가야하며, 현재는 0~9까지 한자리 숫자만 지원됩니다. (총 10개이며 더 필요하면 말씀 부탁드립니다.)

<br2/>

- 모바일에서는 두줄로 변경됩니다.
- 위 예시처럼 작업하시면 figma와 스타일링이 같아집니다.
- 각 다운로드 요소 아래에 24px 마진이 생기며, `<br10/>` 을 통해 10px을 추가로 넣어주면 hr과의 간격이 figma와 동일해집니다.

<br1/>
