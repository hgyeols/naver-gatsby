---
title: 'TEST TITLE' # TITLE 영역에 표시
part: 'UX Writing' # LNB part
template: 'docs'
order: '1' # readme.md 참조
metaTitle: '브라우저 탭에 표시' # metadata
metaDescription: 'metaDescription' # metadata
titleDescription: 'NDS는 모바일 해상도, PC Web 등 사용자가 서비스를 사용하는 모든 서비스를 제공하는 것을 목적으로 합니다' # title 밑에 나오는 문장
---

(0번) 일반적으로는
엔터를 1번 쳐도 같은 문단(p)에 표시됩니다. 각 문단 아래에 2px 여백이 있습니다.

(1번) 만약 문장 끝에 space를 2개 이상 치고 엔터를 1번 치면  
줄바꿈이 생기고 다른 문단이 됩니다. 이때는 아래 문장 밑에만 2px이 존재합니다.

(2번) 혹은 이렇게 엔터를 두번 치면 다음 문단으로 표시됩니다. 역시 문단 아래 2px 여백 존재합니다.

(3번) 혹은 중간에<br/>을 입력하면 1번과 같습니다. 이 문장 아래에 2px이 존재합니다 (윗문장 밑에는 없음)

<br1/>

(4번) 이렇게 `<br1/>`을 입력하면 32px 마진이 생깁니다. 3번 아래에 2px 있으므로 3번-4번 사이 마진은 34px입니다.

(5번) 또한
<br1/>
(6번)엔터 한번만 쓰고 사용해도 여백이 생기긴하지만(이 6번 문장이 문단처리가 안되어서 이 문장 아래에 2px이 생기지 않는 등 여러 문제가 생길 수 있습니다), Markdown에서는 각 요소마다 엔터 2번씩 해주는 것을 권장합니다.

(7번)이렇게 중간에 넣으면 <br1/> 7번 문장 전체가 하나의 문단으로 인식되어 2px은 맨 마지막에만 걸립니다.

<br2/>

(8번) 위와 같이 `<br2/>`를 입력하면 14px 마진이 생깁니다. 7번 아래에 2px 있으므로 위 여백은 총 16px입니다.

<br1 />

(9) hr은 `---` 혹은 `***`로 호출합니다. hr은 위아래 10px이 있고, 이 문단아래에 2px이 있어서 총 12px입니다.

---

(10) `---` 얘는 < >로 되어있는 custom code가 아니므로 1번 엔터쳐도 상관없습니다. 2번 엔터친거랑 같습니다.

---

(11) 그래도 2번 엔터쳐서 위아래 띄는 것을 권장합니다.

<br1 /><br1 />

# 헤더 1 테스트1번

헤더1은 `#`으로 호출합니다

# 헤더 1 테스트2번

헤더 또한 < >로 되어있는 custom code가 아니므로 2번 띄나 1번 띄나 같습니다. (가독성/통일성 상 이 방법 추천)

## 헤더 2 테스트

헤더2은 `##`으로 호출합니다

### 헤더 3 테스트

헤더2은 `###`으로 호출합니다

<br1 /><br1/>

# 리스트 테스트

unordered 리스트는 `-`로 호출합니다.

- 1번 리스트
- 2번 엔터 1번 쳐도 되고

- 3번 엔터 2번 쳐도 같습니다.

<br1 />

ordered 리스트는 `1.`로 호출합니다.

1. 1번 리스트
2. 2번 리스트

3. 3번 리스트

<br1 /><br1/>

# 이미지 및 캡션 테스트

<br2/>

### 기본형

기본 마크다운 문법으로는 아래와 같이 이미지를 첨부합니다 `![alt message](주소)`  
지원되는 format은 jpg, png 입니다.

![alt](https://www.mobileworldlive.com/wp-content/uploads/2017/03/Naver-logo.png)

그림 위에 16px이 추가되고 아래에 2px margin이 생깁니다. width는 100%입니다. 이 방법으로 이미지 1개일 때 사용하면 됩니다.

<br2/>

- 만약 local 파일을 넣으려면 해당 마크다운 파일과 같은 폴더에 있거나 아래 폴더에 있어야합니다.
- local에서 develop시 image가 blur처리만 되고 안나온다면 .cache폴더를 삭제해보세요.
- 로컬 png의 경우 개발 컴퓨터 환경에 따라 오류가 날 수도 있으니 jpg를 권장합니다.

![alt](./img/dd.jpg)

<cap>

캡션을 넣을 때는 이렇게 줄바꿈이 필요합니다. 캡션 밑에도 2px 마진이 붙습니다. 캡션 font가 SF Pro Display입니다.

</cap>

<br2/>

### 이미지 2개일 때

<img2>

![alt](https://www.naverlabs.com/naverlabs_/story/202105/1621330139650.png)

![alt](https://naverlabs.com/naverlabs_/story/202010/1601982940025_ALL_.jpg)

</img2>

<cap>

이미지의 height이 다르면 더 큰 이미지 밑에 caption이 표시됩니다.

</cap>

<br2/>

- 이미지가 2개 일때는 `<img2>`와 `</img2>`와 사이에 이미지를 넣어주셔야하고, 이때 엔터2번으로 한칸씩 띄어주셔야만 합니다.
- config.js에서 페이지의 maxWidth를 변경하더라도 각 이미지 간 간격 24px를 유지합니다. 각 이미지의 width는 (maxWidth-24 / 2)가 됩니다.
- Tablet에서는 간격이 18px가 됩니다.
- Mobile에서는 세로로 정렬됩니다. Figma에서 각 요소간 간격이 10px로 되어있는데, 기본으로 모든 요소 아래에 2px이 붙게 설계되었기 때문에, 사이 margin을 8px로 주어서 10px 간격을 맞췄습니다.
- 세로로 정렬 되더라도 최상단에 16px 여백은 동일하게 존재합니다.
- 캡션은 가장 아래 이미지 밑에 붙습니다.

<br1/>

### 이미지 3개일 때

<img3>

![alt](https://www.naverlabs.com/naverlabs_/story/201904/1556186628283_SEK_8634.JPG)

![alt](https://www.naverlabs.com/naverlabs_/story/201904/1556182063383_002.JPG)

![alt](https://www.naverlabs.com/naverlabs_/story/201904/1556182489355_SEK_9008.JPG)

</img3>

<cap>

**볼드 캡션입니다.**

두줄을 쓰려면 줄바꿈이 필요합니다.

</cap>

<br2/>

- 이미지가 3개 일때는 `<img3>`와 `</img3>`와 사이에 이미지를 넣어주셔야하고, 나머지 사용법은 `img2`와 같습니다.

<br1/>

### 이미지 + Icon

<imgIcon 
  src1='https://www.naverlabs.com/naverlabs_/story/201904/1556184924229_NAVER-LABS_CES_2019_098.jpg' 
  src2='https://www.naverlabs.com/naverlabs_/story/201904/1556184803729_NAVER-LABS_CES_2019_113.jpg' 
/>

<cap>

**볼드 캡션입니다.**

<br6/>

혹시 몰라서 6px 짜리 br6도 준비해보았습니다.

</cap>

<br2/>

- 이미지에 icon이 들어가는 경우입니다. 위에 16px, 아래에 2px margin이 생성됩니다.
- `src1`과 `src2`에 각각 이미지 주소를 넣으면 됩니다. 좌측 그림에 yes가, 우측 그림에 no가 표시됩니다.
- 사이 간격은 24px이고 태블릿에선 18px로 조정됩니다.

<br1/>

### 이미지 + Text

<imgText>

<span>

이 유형은 좀 복잡합니다. 우선 `<imgText>`와 `</imgText`>로 전체를 감쌉니다.

<br2 />

그 다음으로 텍스트 부분은 `<span>`과 `</span>`으로 감싸고, img부분은 평소처럼 작성합니다. 이때 한칸씩 띄어줘야 정상적으로 인식합니다.

사이 간격은 데스크탑 24px, 테블릿 18px로 동일합니다.
모바일에는 텍스트 부분과 이미지 부분이 세로로 정렬됩니다.

</span>

![alt](https://www.naverlabs.com/naverlabs_/story/201904/1556182063383_002.JPG)

</imgText>

<cap>

- 캡션 테스트 첫번째 리스트, 두 요소 중 더 height이 긴것 아래에 표시됩니다.

- 캡션 테스트 두번째 리스트

- 캡션 중 리스트만 font family가 다릅니다.

</cap>

<br1/>

<br1/><br1/>

# 비디오

<br2/>

<video link='https://www.youtube.com/embed/_a5JYdYMmPo' />

<br2/>

만약 youtube와 같은 external video를 불러오려면 위와 같이 `<video link='주소'>` 를 사용합니다.

<br1/><br1/>

# 테이블

<br2/>

| 헤더1     | 헤더2                                                |
| --------- | ---------------------------------------------------- |
| 테스트123 | 테스트123456                                         |
| 테스트    | 이쪽 열에 긴게 있으면 이것에 맞게 비율이 조정됩니다. |

기본적으로 테이블은 위와 같은 문법을 씁니다. 이때 hyphen(-)이 3개 이상이어야 헤더로 인식합니다. 기본은 좌측 정렬입니다.

<br2/>

| header | header2 | header3 |
| ------ | ------- | ------- |
| a      | c       | e       |
| b      | d       | f       |

가독성을 위해 space를 아무쪽에나 넣어서 줄을 맞춰도 됩니다.

<br2/>

| header | header2 | header3                                                                                                                       |
| ------ | ------- | ----------------------------------------------------------------------------------------------------------------------------- |
| a      | c       | e                                                                                                                             |
| b      | d       | 네이버(NAVER)는 대한민국 최대 포털 사이트다.자매 서비스로 모바일 메신저 라인, 뉴스, 웹툰, 지도, 검색 엔진 등을 보유하고 있다. |

줄바꿈 테스트

<br2/>

<table>
  <tr>
    <th>헤더테스트</th>
    <td>일반 내용</td>
  </tr>
  <tr>
    <th>헤더테스트 길이에 맞게 늘어납니다</th>
    <td>
    기본 가로 양식과 달리 세로 양식은 header 길이가 길 때 줄바꿈이 되며 min-width는 임의로 100px로 설정했습니다.</td>
  </tr>
</table>

마크다운 특성 상 세로 헤더는 직접 코드를 작성하는 방법밖에 없는 것 같습니다.  
`<tr>`이 '행(row)'이 되며 그 안에 있는 요소들이 해당 row안의 '열(column)'로 작동됩니다. `<th>`로 쌓여진 부분에 헤더이고 `<td>`로 쌓인 부분이 일반 요소입니다.

<br1/>

| 적용대상  | AA 수준                                                                                                                                       | AAA 수준 | ㅇㅇ    |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------- |
| 기본 규칙 | 텍스트                                                                                                                                        | 4.5 : 1  | 7 : 1   |
| 예외 2    | - 18포인트 이상의 텍스트(Text-200 이상)<br6 /> Bold가 적용된 14포인트 이상의 텍스트(Text-90이상 ) <br /> 화면 확대가 가능하도록 구현된 텍스트 | f        | header3 |
| 예외 2    | <ul><li>리스트1</li><li>리스트2</li></ul>                                                                                                     | f        | header3 |
| 예외 3    | d                                                                                                                                             | f        | header3 |

`<br6/>` 추가됨 (6px)  
테이블 내부의 띄어쓰기는, 여백없이 줄바꿈하려면 <br/>을 넣습니다.  
내부 리스트는 위처럼 `<ul>`혹은 `<ol>`을 이용합니다.

<br1/><br1/>

# 시뮬레이터

### 코드 only

아래처럼 ` ``` `을 이용해서 작성합니다. 시작과 끝에 ` ``` `가 있어야 합니다.

첫 인자로는 표현할 언어명이 들어갑니다. 아마 일반적으로는 html을 사용할 듯 합니다.

highlighting theme(각 언어별 색 표현)은 가장 널리 쓰이는 prismjs를 사용했습니다.  
만약 theme을 바꾸려면 /src/components/mdxComponents/codeBlockTheme.js에서 theme이름을 바꿔주면 됩니다.

outLinkName=[]에 2개 **이상**의 링크 이름과, outLinkSrc=[]에 **같은 숫자**의 링크를 입력면 아레에 outlink가 뜹니다.

```html outLinkName=[Outlink1,Outlink2] outLinkSrc=[http://naver.com,http://figma.com]
<!-- 위에 언어 명을 쓰면 그에 맞게 문법과 색을 매칭 -->
<ul>
  <li className="Title 1">Content Section</li>
  <li className="Title 1">Content Section</li>
  <li className="Title 1">Content Section</li>
</ul>
```

<br2/>

outlink를 적지 않으면 아래처럼 나오지 않습니다.

```css
/* 위에 css, js, python 등등 여러 언어 가능 */
.hightlight {
  display: none;
}
```

<br1/>

### 코드 only + Tab

Tab의 경우는 n개로 하기엔 호출 코드가 너무 복잡하여, 우선 2개로 만들었습니다.
아래처럼 언어 옆에 `tab` 혹은 `tab=true`를 넣고, `tabName=[aa,bb]`를 넣어줍니다.  
이때 tabName에 띄어쓰기가 들어가면 안됩니다.

두번째 탭에 보여질 코드는 `---`로 구분됩니다.  
이러한 tab 양식은 한 페이지에 여러개 사용될 경우에 대비하여 **id가 필요**합니다. 서로 다른값이기만 하면 됩니다.
tab 양식의 경우 height가 자동으로 인식이 안되므로 따로 설정이 필요합니다. `height` 뒤에 숫자로 적용가능하게 하였습니다.

```html tab tabName=[Android,iOS] id=1 height=180
<!-- 위에 tab=true로 -->
<ul>
  <li className="Title 1">Content Section</li>
  <li className="Title 1">Content Section</li>
  <li className="Title 1">Content Section</li>
</ul>
---
<!-- 구조상 2개만  -->
<ul>
  <li className="Title 2">Content Section2</li>
  <li className="Title 2">Content Section2</li>
  <li className="Title 2">Content Section2</li>
</ul>
```

<br2/>

인자들의 순서는 상관이 없습니다. 탭 + outlink 예시입니다.

```html tab=true tabName=[Test1,Test2] outLinkName=[Outlink1,Outlink2] outLinkSrc=[http://naver.com,http://figma.com] id=a height=160
<!-- 위에 tab=true로 -->
<ul>
  <li className="Title 3">Content Section</li>
  <li className="Title 3">Content Section</li>
  <li className="Title 3">Content Section</li>
</ul>
---
<!-- 구조상 2개만  -->
<ul>
  <li className="Title 4">Content Section2</li>
  <li className="Title 4">Content Section2</li>
  <li className="Title 4">Content Section2</li>
</ul>
```

<br1/>

### 시뮬레이터

아래는 시뮬레이터 호출 방법입니다.
(n개 tab에서 각 n개 옵션을 호출하는 최적의 방법을 아직 고안중입니다.. 간단하게 표현하기가 복잡하네요)

<!-- <sim
  firstTabName="Light"
  firstTabOptions={
    [{
      name: "Option 1",
      source: "dd",
    },
    {
      name:"Option 2",
      source: "dd",
    }]
  }
  secondTabName="Dark"
/> -->

<br2/>

<!-- ```jsx codeDemo
import React from 'react';

function showExamples() {
  return (
    <>
      <button>test!!</button>
    </>
  );
}

// 꼭 default로 export 되어야 함.
export default showExamples;
```

### 시뮬레이터 (잘못만든것)

```js react-live
<button className={'btn-test'}>텍스트를 바꿔보세요</button>
``` -->

<br1/><br1/>

# Sound - Download

<br2/>

사운드는 아래의 명령어로 호출합니다.

<sound link='https://ia800905.us.archive.org/19/items/FREE_background_music_dhalius/backsound.mp3' />

<br2/>

다운로드는 현재 `A`와 `B` 두 타입이 구현되어 있습니다.

- 먼저 `A`타입은 `<downA />`로 호출합니다.
- 변수로는 logo, title, text, link 4개씩 필요합니다.
- `logo`에는 sketch, figma, zeplin, font, PSD, illust, PDF, lottie가 들어갈 수 있습니다.
- Desktop에서는 각 다운로드 간 간격이 24px이고, Tablet에서는 18px입니다. width가 변할수록 비율을 유지한 상태로 줄어듭니다.
- Mobile에서는 한줄로 바뀝니다.

<downA
 logo1='figma' title1='Figma Design Kit' text1="피그마" link1='https://github.com/git-for-windows/git/releases/download/v2.32.0.windows.1/Git-2.32.0-64-bit.exe'
 logo2='sketch' title2='Sketch Design Kit' text2="스케치" link2='https://github.com/git-for-windows/git/releases/download/v2.32.0.windows.1/Git-2.32.0-64-bit.exe' 
 logo3='PSD' title3='PSD Design Kit' text3="PSD" link3='https://github.com/git-for-windows/git/releases/download/v2.32.0.windows.1/Git-2.32.0-64-bit.exe' 
/>

<br2/>

두번째 양식입니다.

- `B`타입은 `<downB />`로 호출합니다.
- 마찬가지로 변수로는 logo, title, text, link 4개씩 필요합니다.
- Desktop에서는 각 다운로드 간 간격이 24px이고, Tablet에서는 18px, Mobile에서는 5px(figma에 없어서 임의)입니다. width가 변할수록 비율을 유지한 상태로 줄어듭니다.
- Desktop에서는 한줄에 3개씩, Mobile에서는 한줄에 2개씩으로 바뀝니다.

<downB
 logo1='figma' title1='Figma Design Kit' text1="피그마" link1='https://github.com/git-for-windows/git/releases/download/v2.32.0.windows.1/Git-2.32.0-64-bit.exe'
 logo2='sketch' title2='Sketch Design Kit' text2="스케치" link2='https://github.com/git-for-windows/git/releases/download/v2.32.0.windows.1/Git-2.32.0-64-bit.exe' 
 logo3='PSD' title3='PSD Design Kit' text3="PSD" link3='https://github.com/git-for-windows/git/releases/download/v2.32.0.windows.1/Git-2.32.0-64-bit.exe' 
/>

<br1/>

# Link

일반 링크를 걸때는 `[텍스트](주소)`를 사용합니다. [Naver](https://www.naver.com)

### INLINK

<br2/>

커스텀 링크 1번은 다음과 같습니다. 아래 3개의 인자를 필요로 합니다.

<link1 link='http://www.naver.com' text1='Naver Design' text2='Related link' />

<br2/>

커스텀 링크 2번은 다음과 같습니다. 아래 6개의 인자를 필요로 합니다. 각 width는 (maxWidth/2)-24 입니다.

<link2 
  link1='http://www.naver.com' text11='Naver Design' text12='Related link' 
  link2='http://www.figma.com' text21='Naver Test' text22='Related link'
/>

<br1/>

### OUTINK

<br2/>

커스텀 아웃링크는 다음과 같습니다.

<outlink text='Test1' link='http://naver.com' />

<br2/>

n개가 들어갈 때에는, text에 comma가 들어갈 수도 있으니 `;`로 구분자를 넣었습니다.  
text와 link의 수가 같아야하며, 인자에 띄어쓰기가 들어가면 안됩니다.

<outlink text='Test1;Test2' link='http://naver.com;http://figma.com' />

<br2/>

<outlink text='Test1;Test2;Test3;Test4' link='http://naver.com;http://figma.com;http://naver.com;http://figma.com' />

<br1/>

### MAILINK

<br2/>

Mail Link는 다음과 같이 호출합니다.

<mailLink
 name1='Name_1' mail1='mail@navercorp.com' photo1=''
 name2='Name_2' mail2='mail@navercorp.com' photo2=''  
 name3='Name_3' mail3='mail@navercorp.com' photo3=''
/>

- 변수 3개 `name`, `mail`, `photo`가 모두 필요합니다. `''`이런 식으로 비워져있어도 됩니다.
- 각 요소 간 간격은 24px고 태블릿에서는 18px입니다.
- 모바일에서는 1줄로 바뀝니다.
- 이때 아래 margin은 16px입니다 (figma에 없어서 임의)

<br2/>

만약 인자 `photo`에 사진 링크를 넣으면 사진이 표시됩니다.

<mailLink name1='Name_Eng' mail1='mail@navercorp.com' photo1='https://i.imgur.com/CNhZzYY.jpeg' />

<br1/>

# etc

첫번째 _italic 글씨 표현_ 방법.

두번째 _italic 글씨 표현_ 방법. 일반적으론 이 방법을 주로 사용합니다. ~~delete는 이렇게~~

**strong 글씨 표현**은 이 방법을 사용합니다.

Bold와 italic을 한번에 하려면 **_이 방법_**을 사용합니다.
