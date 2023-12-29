function solution(my_string, letter) {
  var answer = "";
  var value1 = [...my_string];
  var value2 = letter;
  var value3 = value1.filter((item)=> !value2.includes(item));
  for(i = 0; i < value3.length; i++){
    answer += value3[i];
  }

  return answer;
}