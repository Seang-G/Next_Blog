# Next Blog 📝

<a href='https://next-blog-seang-gs-projects.vercel.app/'>
사이트 이동
</a>

### 프로젝트 개요
##### 소개
- 나의 글을 다른 사람들에게 전해봐요
##### 목적
- 웹 기술 학습 (Next.js, Prisma, Vercel Postgres, TypeScript, Tailwind CSS)
- 웹 기술 간의 상호작용 학습
##### 참여 인원
- 1인
##### 사용한 기술 스택
| 용도     | 기술 스택 |
|:--------:|:--------:|
| Front End    | Next.js 14 (TypeScript)     |
| CSS    | Tailwind     |
| Back End     | Next.js 14 (TypeScript)   |
| Database     | Vercel Postgres        |
| ORM     | Prisma        |
| Server Hosting     | Vercel        |

<br />

### 기능 소개

##### 메인
![Main](https://github.com/Seang-G/Next_Blog/assets/61152284/6db9b43b-d824-44e7-a45b-aefb6c2e4514)

- Next Blog의 메인 및 루트 페이지
- 사람들이 올린 포스트를 확인할 수 있는 공간
- 글 제목을 눌러 해당 포스트의 전체 내용을 볼 수 있음
- 프로필 이미지를 눌러 유저 페이지로 이동할 수 있음
    
<br />

##### 포스트
![post](https://github.com/Seang-G/Next_Blog/assets/61152284/0c54706e-a71a-43d3-b957-8e92ad188a72)

- 포스트의 전체 내용을 볼 수 있는 페이지
- 글 내용은 Markdown으로 작성됨
- 우측 작성자 프로필을 클릭해 유저 페이지로 이동할 수 있음
- 내가 작성한 글이라면 삭제, 수정 버튼 표시
- (Markdown 플러그인 추가 예정)

<br />

##### 유저 정보
![MyPage](https://github.com/Seang-G/Next_Blog/assets/61152284/cf43dfdc-0067-49fe-b1af-5bbfd17d105d)

- 유저의 기본 정보 및 작성한 글 확인 가능
- 자신의 페이지인 경우 포스트 색상 변경 가능

<br />

##### 글쓰기
![Write](https://github.com/Seang-G/Next_Blog/assets/61152284/beec317f-6d2a-4941-8b3f-469b3f940593)

- 상단의 +New 버튼을 통해 올 수 있는 페이지
- Markdown으로 글 작성 가능
- (미리보기 추가 예정)

<br />

##### 초안
![Draft](https://github.com/Seang-G/Next_Blog/assets/61152284/12f8749d-eaff-4099-899e-509a7da0df76)

- 포스트를 작성했을 때 바로 메인 페이지로 올라가는게 아니라 Draft로서 따로 저장됨
- Publish, Delete, Edit을 할 수 있음
- (불필요한 과정이라 판단되면 삭제 예정)

<br />

##### 상단바
![header](https://github.com/Seang-G/Next_Blog/assets/61152284/2bd81ffa-d57f-4292-bae3-e68ccad115ae)

- 어떤 페이지에서든 볼 수 있는 헤더
- 기본적으로는 로그인 버튼만 있음

![header_login](https://github.com/Seang-G/Next_Blog/assets/61152284/c988a75e-8cd3-4d3f-9424-de8bfdab0577)

- 로그인 상태라면 글쓰기, 초안, 내 정보, 로그아웃 버튼이 생김

<br />

##### 로그인
![Login](https://github.com/Seang-G/Next_Blog/assets/61152284/914ca4bd-f588-4a22-9329-0ce92ddc1a25)

- OAuth를 이용해 Github로 로그인 가능
- (별도의 회원가입 구현 예정)
- (구글 등 다른 OAuth 추가 예정)

<br /><br />

### 개선사항

- UI/UX 개선하고 싶지만 디자인 지식 및 감각이 부족 -> 학습 필요 
- 로딩이 김 -> 클라우드 DB때문이라 예상하고 있지만, 면밀히 확인할 필요 있음
- 여러 예외사항에 대한 테스트 절차 필요
- 페이지 접근 권한 확인 과정 추가 필요
- 한 번에 몇개의 포스트를 가져올 지 생각(or 무한 스크롤)