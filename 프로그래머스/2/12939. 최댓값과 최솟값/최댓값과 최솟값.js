function solution(s) {
  var answer = "";
  let test = s
    .split(" ")
    .map((value) => {
      return Number(value);
    })
    .sort((a, b) => a - b);

  answer = test[0] + " " + test[test.length - 1];

  return answer;
}