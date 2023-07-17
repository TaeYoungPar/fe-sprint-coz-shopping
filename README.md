# COZ-Shopping 솔로 프로젝트

## 실행 화면
![coz-shopping](https://github.com/TaeYoungPar/fe-sprint-coz-shopping/assets/47932834/877634be-aa3e-48f2-af27-3e5dcf245b07)





## 주요 기능

* Header
  - 좌측 상단 로고와 COZ Shopping 텍스트가 있으며 로고를 클릭시 메인 화면으로 돌아온다.
  - 우측 상단 햄버거 아이콘 클릭시 드랍박스가 열리며 상품 리스트 페이지와 북마크 리스트 페이지로 이동할 수 있는 라우터가 있다.

* Main
  - 메인 화면에는 상품 리스트와 북마크 리스트가 4개씩 화면에 출력되어 있으며 해당 데이터는 axios를 통해 데이터를 가져온다.
  - 상품 리스트 및 북마크 리스트는 랜덤한 데이터가 랜더링되고 각 데이터들은 각각 다른 데이터들을 가지고 있다.
  - 화면에 출력된 데이터의 사진을 클릭하면 모달이 열려 화면 중앙에 이미지가 나타나게 된다.
  - 모달에는 해당 이미지와 제목 그리고 북마크가 존재한다.
  - 화면에 출력된 데이터에는 별표시 모양의 북마크가 존재하며 해당 북마크 아이콘을 클릭시 노란색 별모양으로 바뀌고 북마크 리스트에 해당 데이터가 추가된다. 또한 북마크 아이콘을 클릭시 토스트가 작동하여 화면 아래 북마크가 추가되거나 삭제될때 등장한다.

* Product-Page
   - 초기 상품 리스트 페이지 화면에는 16개의 데이터만 화면에 출력이 되어 있고 스크롤을 내릴때 무한 스크롤이 작동하여 화면에 데이터가 추가적으로 나타난다.
   - 상품 리스트 페이지는 화면 상단에 "전체, 상품, 카테고리, 기획전, 브랜드"라는 필터가 존재하며 클릭시 해당 데이터의 타입들끼리 필터링하여 화면에 보여준다.
   - 메인 화면과 같이 모달과 북마크 기능을 사용할 수 있다.

* BookMark-Page
   - 상품 리스트 페이지의 내용과 동일하다.
    
     

## 기술 스택
<div align="left">
<img src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=HTML5&logoColor=white" />
<img src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=CSS3&logoColor=white" />
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=flat&logo=javascript&logoColor=white" />
<img src="https://img.shields.io/badge/react-61DAFB?style=flat&logo=react&logoColor=white" />
<img src="https://img.shields.io/badge/axios-5A29E4?style=flat&logo=axios&logoColor=white" />
</div>


