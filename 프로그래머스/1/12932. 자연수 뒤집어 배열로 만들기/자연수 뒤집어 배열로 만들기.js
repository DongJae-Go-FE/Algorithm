function solution(n) {
  var answer = [];
  var arr = [...n.toString()];

  for (let i = 0; i < arr.length; i++) {
    answer.push(Number(arr[i]));
  }

  return answer.reverse();
}
