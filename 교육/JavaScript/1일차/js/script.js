//1. 아이디 선택자
//id는 하나의 id만 부여 가능하다.
//단일 요소만 선택이 가능하다.
let 아이디 = document.getElementById("아이디");
console.log("아이디 선택자:::", 아이디);

//2. 클래스 선택자
//class는 같은 class명을 여러개의 html에 부여가 가능하다
let 클래스 = document.getElementsByClassName("클래스");
//?
console.log("클레스선택자:::", 클래스);

let 클래스2 = document.getElementsByClassName("클래스")[2];
console.log("클레스선택자-3번째요소:::", 클래스2);
//컴퓨터의 숫자는 0부터 시작 즉 0,1,2 이런식으로 시작 그래서 3번째는 2

//3. 요소 전체선택자
let 클래스전체 = document.querySelectorAll(".클래스");
console.log("클래스전체선택자:::", 클래스전체);
//선택한 요소 전체를 노드 배열로 만들어서 선택을 한다.

//4. 태그 선택자
let 태그 = document.getElementsByTagName("div");
//?
console.log("태그선택자:::", 태그);

let p태그 = document.getElementsByTagName("div")[1].getElementsByTagName("p");
console.log("태그선택자2:::", p태그);

let 이거는 = document.getElementsByTagName('div')[1].getElementsByTagName('*');
console.log("퀴즈:::", 이거는);



//숙제 span 태그의 3번째를 querySelectorAll로 선택하여 console.log로 출력을 하시오 