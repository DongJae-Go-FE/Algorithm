function solution(array) {
  var answer = array.sort((a, b) => a - b);
  return answer[Math.round(array.length / 2) - 1];
}