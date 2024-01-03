function solution([...my_string]) {
  var answer = "";
  my_string.forEach((item) => {
    if (!answer.includes(item)) {
      return (answer += item);
    }
  });
  return answer;
}