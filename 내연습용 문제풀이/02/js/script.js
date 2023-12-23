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

function solution6(s1, s2) {
  var answer = 0;
  for (let i = 0; i < s1.length; i++) {
    for (let j = 0; j < s2.length; j++) {
      if (s1[i] === s2[j]) {
        {
          answer++;
        }
      }
    }
  }
  return answer;
}

solution6(["a", "b", "c"], ["com", "b", "d", "p", "c"]);

function solution7(n) {
  var answer = [];

  for (let i = 1; i < n; i++) {
    if (i % 2 != 0) {
      answer.push(i);
    }
  }
  console.log(answer);
  return answer;
}

solution7(10);

function solution8(n) {
  var answer = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      answer.push(n / i);
    }
  }

  console.log(answer.length % 2 ? 1 : 2);
  return answer;
}

solution8(144);

function solution9(slice, n) {
  var answer = 0;
  if (n % slice != 0) {
    answer = n / slice + 1;
  } else {
    answer = n / slice;
  }
  return parseInt(answer);
}

solution9(7, 10);
