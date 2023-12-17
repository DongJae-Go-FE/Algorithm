function solution(array, height) {
  var answer = array.filter((arr) => arr > height).length;
  return answer;
}

solution([100, 200, 300], 172);

function solution2(array, n) {
  var answer = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === n) {
      answer++;
    }
  }

  return answer;
}

solution2([1, 1, 2], 1);

function 어레이(...arr) {
  return arr;
}

var newArray = 어레이(1, 2, 3, 4, 5);
console.log(newArray);

var numbers = [2, 3, 4, 5, 6, 1, 3, 2, 5, 5, 4, 6, 7];

console.log(Math.max(...numbers));

function 정렬([...text]) {
  console.log(text.sort());
  return text.sort();
}

정렬("bear");

// function 글자세기([...text]) {
//   console.log(text);
// }

// 글자세기("aacbbb");

function solution3(array) {
  var answer = array.sort((a, b) => a - b);
  return answer[Math.round(array.length / 2) - 1];
}

solution3([1, 2, 7, 10, 11]);

function solution4(n) {
  var answer = [...n.toString()].map((a) => {
    return Number(a);
  });
  return answer.reduce((a, b) => a + b);
}

solution4(1000);

// 문자열 str1, str2가 매개변수로 주어집니다. str1 안에 str2가 있다면 1을 없다면 2를 return하도록 solution 함수를 완성해주세요.
function solution5(str1, str2) {
  var answer = 0;

  if (str1.includes(str2)) {
    return (answer = 1);
  } else {
    return (answer = 2);
  }
}

solution5("ab6CDE443fgh22iJKlmn1o", "6CD");
