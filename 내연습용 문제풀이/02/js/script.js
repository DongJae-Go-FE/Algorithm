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

function 글자세기([...text]) {
  console.log(text);
}

글자세기("aacbbb");
