var 사람 = {
  name: "손흥민",
  sayHi() {
    return console.log("안녕 나는 " + this.name);
  },
};

사람.sayHi(); //안녕 나는 손흥민

var 자료 = {
  data: [1, 2, 3, 4, 5],
  전부더하기() {
    let sum = 0;
    for (i = 0; i < this.data.length; i++) {
      sum += this.data[i];
    }

    return console.log("2번:::", sum);
  },
};
자료.전부더하기();

const button = document.getElementById("button");
button.addEventListener("click", function () {
  setTimeout(() => {
    console.log(this.innerHTML);
  }, 1000);
});

for (let i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 1000);
}

var 버튼들 = document.querySelectorAll(".btn");
var 모달창들 = document.querySelectorAll("div");

for (let i = 0; i < 3; i++) {
  버튼들[i].addEventListener("click", function () {
    모달창들[i].style.display = "block";
  });
}

function solution([...my_string]) {
  let reverse = my_string.reverse();
  let text = "";
  for (let i = 0; i < reverse.length; i++) {
    text += reverse[i];
  }
  var answer = text;
  return answer;
}

solution("bread");
