//1번

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

//2번
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

//3번
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

function solution1(arr) {
  var answer = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    answer += arr[i];
  }
  console.log("테스트", answer / arr.length);
  return answer / arr.length;
}

solution1([-100, 0, 111]);
//.

function solution2(age) {
  var answer = "";
  var ageArr = [...age.toString()];
  for (let i = 0; i < ageArr.length; i++) {
    if (ageArr[i] === "0") {
      answer += "a";
    } else if (ageArr[i] === "1") {
      answer += "b";
    } else if (ageArr[i] === "2") {
      answer += "c";
    } else if (ageArr[i] === "3") {
      answer += "d";
    } else if (ageArr[i] === "4") {
      answer += "e";
    } else if (ageArr[i] === "5") {
      answer += "f";
    } else if (ageArr[i] === "6") {
      answer += "g";
    } else if (ageArr[i] === "7") {
      answer += "h";
    } else if (ageArr[i] === "8") {
      answer += "i";
    } else if (ageArr[i] === "9") {
      answer += "j";
    }
  }

  console.log("111", answer);

  return answer;
}

solution2(23);

function solution3(num_list, n) {
  var answer = [];

  for (let i = 0; i < num_list.length; i += n) {
    answer.push(num_list.slice(i, i + n));
  }

  console.log("3::", answer);
  return answer;
}

solution3([100, 95, 2, 4, 5, 6, 18, 33, 948], 3);

function solution4(s) {
  var answer = "";
  let test = s
    .split(" ")
    .map((value) => {
      return Number(value);
    })
    .sort((a, b) => a - b);

  answer = test[0] + " " + test[test.length - 1];
  console.log(answer);

  return answer;
}

solution4("-1 -2 -3 -4");

function solution5(n) {
  var answer = 0;

  for (let i = 0; i <= n; i++) {
    if (n % i == 0) {
      answer += i;
    }
  }

  return answer;
}

solution5(12);

function solution6(n) {
  var answer = [];
  var arr = [...n.toString()];

  for (let i = 0; i < arr.length; i++) {
    answer.push(Number(arr[i]));
  }

  console.log("asd  ", answer.reverse());

  return answer.reverse();
}

solution6(12345);

function solution7(n) {
  var answer = 0;

  // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
  var num = n.toString();

  for (let i = 0; i < num.length; i++) {
    answer += Number(num[i]);
  }
  return answer;
}

solution7(123);
