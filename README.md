# NAVER DESIGN

**작성중**

아래에 Develop 파트를 따라하신 후, VSCode를 이용한 local 설정을 하신 다음에, VSCode로 /content/ux-writing/aboutux/test/td.md 열고 이를 참고하시며 작업하시면 됩니다.

- 기본 엔드페이지 가이드 라이브 버전: https://starry99.github.io/naver-gatsby/ux-writing/aboutux/test/td
- 기본 엔드페이지 가이드 markdown raw 파일: https://raw.githubusercontent.com/starry99/naver-gatsby/main/content/ux-writing/aboutux/test/td.md
- 타이틀+다운로드 엔드페이지 가이드: https://starry99.github.io/naver-gatsby/ux-writing/aboutux/test/ttt
- Tab Main 페이지 가이드: https://starry99.github.io/naver-gatsby/ux-writing/index

**21.07.05** 0.1.3

- 엔드페이지 마크다운 펑션 업데이트 (위의 가이드 참조)

**21.07.06** 0.1.4

- Tab Main 페이지 구현(위의 Tab Main 가이드 참조), Footer 업데이트, deploy 기능 개선, figma의 tab main 페이지를 따라 모바일과 태블릿 기준 재설정

**21.07.09** 0.1.5

- Footer Figma에 맞게 업데이트
- GNB 데스크탑 메뉴 Figma에 맞게 업데이트
- 엔드페이지 이미지 로컬 파일 기능 추가 (위의 엔드페이지 가이드 참고)
- 타이틀+다운로드 템플릿 추가 (위에 타이틀+다운로드 가이드 참고)
- 크롬 외에 다른 브라우저에도 적용되도록 전반적으로 확장성 추가

**21.07.11** 0.1.6

- Desktop의 컨텐츠 Width (지금 828px)를 config.js에서 한번에 수정할 수 있도록 변경, 이 width에 맞게 마크다운에서 n개 출력하는 요소들도 모두 반영
- Reponsive design의 기준 width를 config.js에서 설정할 수 있도록 변경
- Tab Main 페이지 11일 기준 Figma 모두 반영 완료
- - 폰트 Figma에 맞게 수정
- - Tab Main 페이지 Resource 항목 border 수정 및 홀수개일때 처리 추가
- - Tab Main 페이지 Hover 추가
- 엔드페이지 요소들 업데이트
- - 태블릿 모바일 반응형 요소들 반영
- - 다운로드 파트 재설계 (다운로드 쪽 호출 명령어 변경됨)
- 모든 Table의 border 중첩 현상 수정
- 모든 이미지 bottom에 unknown 6px 여백 붙었던 현상 해결 (https://github.com/TimTree/games-by-tim/issues/3)

**21.07.12** 0.1.7

- Grid Figma에 맞게 변경 (config.js에 LNB의 width도 변경가능하도록 추가)
- Tab Main 페이지 Figma 수정사항 적용

**21.07.13** 0.1.8

- **이번에 바뀐 기능으로 인해 패키지가 추가되어서, git clone이후에 npm i 해주셔야 합니다**
- Grid 수정 (컨텐츠 센터 정렬, 태블릿 반응형 이슈 해결)
- Tab Main 2차 QA 반영
- Endpage 수정

**21.07.14** 0.1.9

- 모바일/태블릿 메뉴 추가
- Tab Main 3차 QA 반영

**21.07.15** 0.1.10

- GNB/LNB 쪽 figma 반영

## Configure - Markdown

모든 markdown 파일은 `content` 폴더 아래에 있어야합니다.

`/content/index.md` : 사이트 접속 시 나오는 메인페이지

`/content/`에 폴더를 만들고 gnb.menu.folderName에 같은 이름을 적으면, 해당 폴더가 GNB 메뉴로 작동합니다.
이때 해당 폴더 내부에 소속된 markdown 파일 LNB에 나타나며, 모든 markdown 파일의

- frontmatter 중 title 항목에 따라, LNB에 나타나는 텍스트가 바뀝니다. (파일명과는 상관없음)
- frontmatter 중 part 항목을 지정해야, LNB에서 해당 대분류 아래에 나타납니다. (part가 없다면 공란)
- frontmatter 중 order 항목에 따라, LNB에서의 순서가 변합니다. 각 depth 별로 별개로 order가 작동하며, 숫자는 작은 순서가 위로 배치됩니다. 숫자의 크기는 상관없습니다.
- frontmatter 중 template 항목에 따라, markdown 파일의 template이 변합니다.

#### Tab Main Page & 1-Depth

GNB 메뉴에 해당되는 폴더 내부에 (ex. `/content/about/`)

- `index.md` 파일을 만들면 Tab Main Page로 동작하며 LNB에 나타나지 않습니다.
- - **이때 frontmatter의 template을 tabMain으로 설정합니다**
- 이 폴더에 다른 이름의 markdown 파일을 넣으면 1-depth로 동작합니다. (ex. `/content/about/aboutnds.md`)

#### 2-Depth & More

GNB 메뉴에 해당되는 폴더 내부에 (ex. `/content/design/`)

- 2-Depth로 사용하고싶은 이름의 폴더를 만들고 (ex. `/content/design/color/`), 같은 이름의 파일을 만들어야합니다. (ex. `/content/design/color.md`)
- 해당 폴더 내부에 markdown 파일을 넣으면 하위 메뉴로 동작합니다.
- 같은 방식을 반복하면 n-depth 메뉴 트리가 구성됩니다.

## Configure - Website

`config.js` 파일을 통해 사이트 전반적인 변수를 관리할 수 있습니다.

- `gatsby` global 변수

  - `pathPrefix` - **중요** 로컬에서 테스트 할때는 '/', 하지만 github pages를 사용할 때는 '/브랜치이름'
  - `siteUrl` - Gatsby Site URL

- `gnb` 상단 GNB 변수

  - `title` - Top left의 title
  - `titleLink` - title 클릭 시의 link
  - `titleTablet` - Tablet(768~1023)에서 표기될 title
  - `menu` - GNB 메뉴 {text: 표시될 title, folderName: markdown 읽어올 폴더 (/content/아래), part: 각 메뉴에 사용될 대분류 }
  - `search` - 검색

- `lnb` 좌측 LNB 변수

  - `ignoreIndex` - index.md 파일(서비스 페이지)를 LNB 메뉴에 표시하지 않는 여부

- `footerLinks` 하단 Footer 변수 {text: 표시될 title, link: 각 링크}

- `siteMetadata` metadata 변수
  - `title`
  - `description`
  - `ogImage` - SNS share시
  - `favicon` - favicon 주소

## Develop

**아예 처음 환경설정 시 참고** https://www.gatsbyjs.com/docs/tutorial/part-0/

중간에 installation guide를 따라하면 됩니다. (node.js, Git, Gatsby CLI, VS Code의 4가지 설치)

다 설치했다면 VSCode를 실행합니다. 아래에 terminal이 보이지 않으면 ctrl + ` 를 눌러줍니다.

[그림1](https://i.ibb.co/K7PxL9J/test.png)

터미널에 `ls` 를 입력하면 현재 위치를 알 수 있고, `cd ..` 를 입력하면 윗 폴더로, `cd 폴더이름`을 입력하면 하위 폴더로 진입할 수 있습니다.

원하는 폴더에 진입 한 후, 아래 명령어를 실행합니다.

```
$ git clone https://github.com/starry99/naver-gatsby.git
$ cd naver-gatsby
$ npm install --legacy-peer-deps
$ npm start
```

별 에러없이 성공했다면 http://localhost:8000 에 접속하면 사이트를 확인할 수 있습니다.

로컬에서(VSCode에서) markdown을 수정 후 저장(ctrl+s)하면 실시간으로 변경사항이 반영됩니다.

[그림2](https://i.ibb.co/4RFdjKv/dasdsa.png)

배포할 때는 일단은 아래의 명령어를 사용합니다.

```
$ npm run deploy
```

자동 배포, custom domain 등 추후에 더 자세히 작성할 예정입니다.

주요 명령어

- `gatsby develop` 혹은 `npm start`: 개발 모드 진입, 브라우저에 `http://localhost:8000/` 접속하여 실시간 변동사항 확인
- `gatsby build --prefix-paths` 바꾼 사이트를 build하여 public 폴더에 생성
- `npm run deploy` build하면서 저장소에 push까지 한번에 처리, github pages 특징 상 실제 웹에 반영되려면 약간의 시간 소요

## Packages

- `gatsby-source-filesystem` 내부에서 다른 확장의 파일을 읽어옴(여기선 markdown)
- `gatsby-transformer-remark` markdown을 해석

## SEO friendly

각 markdown 파일의 frontmatter에 metadata를 적어서 SEO에 활용할 수 있습니다.

```markdown
---
title: 'Title of the page'
metaTitle: 'Meta Title Tag for this page'
metaDescription: 'Meta Description Tag for this page'
---
```

### Todo

- 메인 페이지
- Mobile에서 메뉴
- 바뀐 structure에 맞는 search
- motion graphics
