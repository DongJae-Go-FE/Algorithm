function solution(num_list) {
  var answer = [];
  let num1 = num_list.filter((item) => item % 2 === 0);
  let num2 = num_list.filter((item) => item % 2 === 1);

  answer.push([...num1].length);
  answer.push([...num2].length);
  return answer;
}
