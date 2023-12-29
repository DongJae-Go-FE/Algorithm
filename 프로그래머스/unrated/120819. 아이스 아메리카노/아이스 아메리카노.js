function solution(money) {
  var answer = [];
  let num1 = Math.floor(money / 5500);
  let num2 = money % 5500 ;
  answer.push(num1);
  answer.push(num2);
  return answer;
}