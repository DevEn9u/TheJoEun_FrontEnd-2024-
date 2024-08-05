새파일만들고 index.html로 저장 !탭으로 기본 html태그생성(emmet 익스텐션 기능)

## 환경설정

F1 > settings검색 > open settings(UI)

- Tab Size: 2 - 탭키 누르면 두칸 들여쓰기, 에디터마다 기본 탭사이즈가 다르므로 두칸으로 통일(index.html 이미 있는경우 Spaces:2로 파일에서 변경)

- Bracket Pair Colorization: 허용 - js에서 중괄호 컬러링

## extension

- Atom One Dark Theme 코드 컬러 보기좋게 보여줌

- live server 새로고침없이 저장후 바로확인

- beautify: html, css formatter, beautify selection 단축키지정(alt + b), join lines 단축키지정(alt + j)

- prettier 코드 formatter 자바스크립트 코드 포멧 자동 변경
  
  - 환경설정(ctrl + ,) > default formatter > prettier로 변경
  
  - settings > format on save 체크
  
  - prettier.singleQuote (default: false) -> 체크, 문자열은 홑따옴표 통일(변수에 html있을경우 쌍따옴표가 포함되므로)
  
  - css파일에도 적용되어 한줄 작성 불가, html에 적용시 \<img> -> \<img /> (xhtml 호환을 위해 변경됨)
  
  - .prettierignore 파일을 프로젝트 루트폴더에 만들고 무시규칙 작성, \**/는 현재폴더와 모든하위폴더 
    
    #Ignore all HTML files:
    
    \**/**.html
    
    #Ignore all css files:
    
    \**/**.css 

## 단축키

F1: 커맨드
ctrl+`: 터미널 또는 화면 아래에서 위로 드래그
tab, shift+tab: 들여쓰기 내어쓰기
shift+del: 한줄삭제
ctrl+L: 한줄선택
alt+방향키위아래: 행이동
alt+shift+방향키아래: 한줄복제
alt+shift+방향키오른쪽: 확장선택
ctrl+alt+방향키위아래: 멀티커서

ctrl+D: 다음 같은단어에 멀티커서

alt+클릭 멀티커서
alt+shift+A: 부분주석
ctrl+/: 한줄주석

## jQuery 자동완성

vscode jQuery 자동완성은 html에 내부스크립트에서만 동작하므로 npm을 이용하여 패키지 따로 설치

- node.js설치
- npm i -D @types/jquery
- npm으로 지역(프로젝트폴더)설치하면 프로젝트폴더에 node_modules안에 설치
- -D는 --save-dev 약자이며 package.json에 개발의존성목록에 추가되어 빌드시에 포함되지않게함, i는 install

### 주석 노란색변경 open settings(JSON)

"editor.tokenColorCustomizations": {
        "comments": "#ffec18"
    },
