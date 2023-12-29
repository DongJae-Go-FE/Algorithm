function solution(num, k) {
  var answer = 0;
  let arr = [...num.toString()].map((item) => {
    return Number(item);
  });

  answer = arr.indexOf(k)+ 1;
  return answer ? answer : -1
  }