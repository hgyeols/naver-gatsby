---
title: "TEST TITLE" # TITLE 영역에 표시 
part: "UX Writing" # LNB part
template: "docs" 
order: "1" # readme.md 참조
metaTitle: "브라우저 탭에 표시" # metadata
metaDescription: "metaDescription" # metadata
titleDescription: "NDS는 모바일 해상도, PC Web 등 사용자가 서비스를 사용하는 모든 서비스를 제공하는 것을 목적으로 합니다" # title 밑에 나오는 문장
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
*** 
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

![alt](https://w.namu.la/s/272c638c8e16264bf86d1f7597b2aafc9d4cc251045b0761057f0525eb44662a70117c9e9f92653dee7447094eee067042cfc6450552fb801c96ca6955c70e052880cdfec97cfb8a921e88373a01b9c3699a43caa71e367828a6a4df47bb32f8)

그림 위에 16px이 추가되고 아래에 2px margin이 생깁니다. width는 100%입니다. 이 방법으로 이미지 1개일 때 사용하면 됩니다.

<br2/>

![alt](https://w.namu.la/s/272c638c8e16264bf86d1f7597b2aafc9d4cc251045b0761057f0525eb44662a70117c9e9f92653dee7447094eee067042cfc6450552fb801c96ca6955c70e052880cdfec97cfb8a921e88373a01b9c3699a43caa71e367828a6a4df47bb32f8)

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

이미지가 2개 일때는 `<img2>`와 `</img2>`와 사이에 이미지를 넣어주셔야하고, 이때 엔터2번으로 한칸씩 띄어주셔야만 합니다.  
각 그림 사이의 여백은 24px이고, 데스크탑 기준 각 이미지의 width는 402px(828-24 / 2)가 됩니다.

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

이미지가 3개 일때는 `<img3>`와 `</img3>`와 사이에 이미지를 넣어주셔야하고, 이때 엔터 2번으로 한칸씩 띄어주셔야만 합니다.

각 그림 사이의 여백은 24px이고, 데스크탑 기준 각 이미지의 width는 260px(828-48 / 3)가 됩니다.

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

이미지에 icon이 들어가는 경우입니다. 위에 16px, 아래에 2px margin이 생성됩니다.  
`src1`과 `src2`에 각각 이미지 주소를 넣으면 됩니다. 좌측 그림에 yes가, 우측 그림에 no가 표시됩니다.

<br1/>

### 이미지 + Text

<imgText>

<span>

이 유형은 좀 복잡합니다. 우선 `<imgText>`와 `</imgText`>로 전체를 감쌉니다.

<br2 /> 

그 다음으로 텍스트 부분은 `<span>`과 `</span>`으로 감싸고, img부분은 평소처럼 작성합니다. 이때 한칸씩 띄어줘야 정상적으로 인식합니다.

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

| 헤더1     | 헤더2 |
| --------- | ----- |
| 테스트123  | 테스트123456   |
| 테스트      |    이쪽 열에 긴게 있으면 이것에 맞게 비율이 조정됩니다. |

기본적으로 테이블은 위와 같은 문법을 씁니다. 이때 hyphen(-)이 3개 이상이어야 헤더로 인식합니다. 기본은 좌측 정렬입니다.

<br2/>

| header | header2 | header3 |
| ------ | -----   | -----   |
| a      |        c|      e  |
|     b  |d        |    f    |

가독성을 위해 space를 아무쪽에나 넣어서 줄을 맞춰도 됩니다.

<br2/>

| header | header2 | header3 |
| ------ | -----   | -----   |
| a      |        c|      e  |
|     b  |d        |    네이버(NAVER)는 대한민국 최대 포털 사이트다.자매 서비스로 모바일 메신저 라인, 뉴스, 웹툰, 지도, 검색 엔진 등을 보유하고 있다.   |

줄바꿈 테스트

<br2/>

<table>
  <tr>
    <th>헤더테스트</th>
    <td>일반 내용</td>
  </tr>
  <tr>
    <th>헤더테스트 길이에 맞게 늘어납니다</th>
    <td>네이버(NAVER)는 대한민국 최대 포털 사이트다.자매 서비스로 모바일 메신저 라인, 뉴스, 웹툰, 지도, 검색 엔진 등을 보유하고 있다. 포털 서비스를 중심으로 블로그, 카페, 포스트 등의 커뮤니티 서비스를 비롯하여 뉴스, 스포츠, 연예, 쇼핑 등 총 38개의 다양한 콘텐츠 주제판을 제공하고 있다. 지식백과 서비스를 통해 검색 결과에서도 믿을 만한 정보를 쉽게 찾아볼 수 있도록 하고 있으며, 국어, 영어, 중국어, 일본어를 비롯한 33개의 어학사전을 제공하여 전문 DB를 구축하고 있다.</td>
  </tr>
</table>

마크다운 특성 상 세로 헤더는 직접 코드를 작성하는 방법밖에 없는 것 같습니다.  
`<tr>`이 '행(row)'이 되며 그 안에 있는 요소들이 해당 row안의 '열(column)'로 작동됩니다. `<th>`로 쌓여진 부분에 헤더이고 `<td>`로 쌓인 부분이 일반 요소입니다.

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

다운로드 양식은 아래와 같습니다. `type`에는 현재 `a`와 `b`양식이 구현되어 있습니다.  
`logo`에는 sketch, figma, zeplin, font, PSD, illust, PDF, lottie가 들어갈 수 있습니다.

<down type='a' logo='figma' text1='Figma Design Kit' text2="피그마" link='https://github.com/git-for-windows/git/releases/download/v2.32.0.windows.1/Git-2.32.0-64-bit.exe' />

<br2/>

두번째 양식입니다.

<down type='b' logo='zeplin' text1='Zeplin Design Kit' text2="Download" link='https://github.com/git-for-windows/git/releases/download/v2.32.0.windows.1/Git-2.32.0-64-bit.exe' />

<br1/>

# Link

일반 링크를 걸때는 `[텍스트](주소)`를 사용합니다. [Naver](https://www.naver.com)

### INLINK

<br2/>

커스텀 링크 1번은 다음과 같습니다. 아래 3개의 인자를 필요로 합니다.

<link1 link='http://www.naver.com' text1='Naver Design' text2='Related link' />

<br2/>

커스텀 링크 2번은 다음과 같습니다. 아래 6개의 인자를 필요로 합니다. 총 width 828px에 중간 margin 24px로 각 402px입니다.

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

<mailLink name='Name_Eng' mail='mail@navercorp.com' />

<br2/>

만약 인자 `photo`에 사진 링크를 넣으면 사진이 표시됩니다.

<mailLink name='Name_Eng' mail='mail@navercorp.com' photo='https://i.imgur.com/CNhZzYY.jpeg' />

<br1/>

# etc

첫번째 _italic 글씨 표현_ 방법.

두번째 *italic 글씨 표현* 방법. 일반적으론 이 방법을 주로 사용합니다. ~~delete는 이렇게~~

**strong 글씨 표현**은 이 방법을 사용합니다.

Bold와 italic을 한번에 하려면 ***이 방법***을 사용합니다.

