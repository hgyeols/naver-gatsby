---
title: 'UI Guide'
template: 'tabMain' # template을 꼭 tabMain 으로 해주셔야 합니다.
titlePhoto: 'https://w.media/wp-content/uploads/2021/04/img_office_building.png' # title photo이며 resize는 cover
titleDescription: '일관성을 통해 학습이 쉬운 유저경험, 동일기능의 재작업 최소화, 기획/디자인/개발간의 커뮤니케이션이 간략하며 명료해지는것을 목표로 합니다. 다양한 사용자의 기기에 대응하도록 탄탄히 제작된 반응형 디자인, 충분한 웹 접근성 확보, 인터랙션/애니메이션으로 명확한 Feedback을 제공하여 조작성/직관성이 확보된 Component들을 최우선적으로 사용하도록 하며, 불필요한 Hard-coding을 지양합니다.' # title 밑에 나오는 문장
metaTitle: 'Naver Design - UX Writing' # 브라우저 탭에 표현될 title
metaDescription: 'UX Writing' # metadata
---

<br1/>

다른 end page에 있는 요소들도 사용가능합니다.

<br1/>

# H1 기존과 동일

## H2 size만 23px로 변경 (데탑 기준)

### H3 size만 16px로 변경 (데탑 기준)

<br1 />

---

<br1 />

# Foundation

<tabMainImg
  img1="" 
  title1="How to use 1"
  text1="요소가 총 2개만 있을 때 입니다. desktop에선 크기 고정 240px 240px"
  img2="https://static.wanted.co.kr/images/company/12879/th8tivqp7gqofmdz__1080_790.jpg"
  title2="How to use 2"
  text2="요소가 총 2개만 있을 때 입니다. tablet에선 width는 비율로 height은 사진에 따라 auto"
/>

위의 `<tabMainImg>`를 사용할 때에는 몇가지 규칙이 있습니다.

- 각 요소 당 img, title (볼드 부분), 아래 text의 3가지로 구성됩니다.
- 총 인자의 수가 꼭 **3의 배수**여야 합니다.
- 예컨데 img1 title1 text1 img2 title2 이렇게 5개만 있으면 안됩니다.
- img/title/text의 순서는 상관없지만, **뒤의 붙는 숫자의 순서**를 꼭 지켜야 합니다.
- 예컨데 img1 img2 title1 title2 text1 text2 이런 순서면 안됩니다.
- 인자는 비어있어도 됩니다. (ex. img2="" text2="" title2="타이틀" )
- 각 요소는 자동으로 데스크탑/태블릿에서는 3개씩, 모바일에서는 2개씩 정렬됩니다.

<br2/>

<tabMainImg
  img1="" 
  title1="How to use 1"
  text1="요소가 총 5개 있을 때 입니다. 모바일에선 2개 씩으로 줄어듭니다"
  img2="https://static.wanted.co.kr/images/company/12879/th8tivqp7gqofmdz__1080_790.jpg"
  title2="How to use 2"
  text2="요소가 총 5개 있을 때 입니다. 옆에 3번에 맞춰 크기가 변합니다 (사진의 비율은 변하지않습니다)"
  img3="https://pbs.twimg.com/profile_images/1164016940198666242/ElqZ-oIg_400x400.png" 
  title3="How to use 3"
  text3="hover시 1.2배 커집니다. transition 속도도 조절 가능합니다."
  img4="https://static.wanted.co.kr/images/company/12879/th8tivqp7gqofmdz__1080_790.jpg"
  title4="How to use 4"
  text4="각 변이 1.2배 커지므로 총 넓이는 1.44배 커집니다."
  img5="https://static.wanted.co.kr/images/company/12879/th8tivqp7gqofmdz__1080_790.jpg"
  title5="How to use 5"
  text5="44% 커지는 효과인데, 만약 넓이가 1.2배 커짐을 말하신거면 따로 말씀주세요."
/>

<br1/>

# Resource

<br2/>

<tabMainResource
  logo1="figma" 
  text1="Figma"
  link1="http://figma.com"
  logo2="sketch" 
  text2="Sketch"
  link2="http://naver.com"
  logo3="github" 
  text3="Github"
  link3="http://figma.com"
  logo4="font" 
  text4="NAVER Fonts"
  link4="http://figma.com"
  logo5="illust" 
  text5="NAVER Icon"
  link5="http://figma.com"
/>

<br2/>

- 위의 `<tabMainResouce>`도 위의 `<tabMainImg>`과 유사하게 작동합니다.
- 우선 figma에 있는 로고 6개만 적용시켜놓았습니다.
- 각 logo이름은 figma, sketch, github, font, illust, storybook 입니다.

<br1/>
