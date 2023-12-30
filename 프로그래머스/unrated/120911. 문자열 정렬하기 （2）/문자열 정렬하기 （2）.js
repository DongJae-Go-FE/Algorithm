function solution(my_string) {
  var answer = "";
  var arr = [...my_string.toLowerCase()].sort();
  for (let i = 0; i < arr.length; i++) {
    answer += arr[i];
  }
  return answer;
}