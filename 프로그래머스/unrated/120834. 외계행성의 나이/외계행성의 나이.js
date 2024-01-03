function solution(age) {
  var answer = "";
  var ageArr = [...age.toString()];
  for (let i = 0; i < ageArr.length; i++) {
    if (ageArr[i] === "0") {
      answer += "a";
    } else if (ageArr[i] === "1") {
      answer += "b";
    } else if (ageArr[i] === "2") {
      answer += "c";
    } else if (ageArr[i] === "3") {
      answer += "d";
    } else if (ageArr[i] === "4") {
      answer += "e";
    } else if (ageArr[i] === "5") {
      answer += "f";
    } else if (ageArr[i] === "6") {
      answer += "g";
    } else if (ageArr[i] === "7") {
      answer += "h";
    } else if (ageArr[i] === "8") {
      answer += "i";
    } else if (ageArr[i] === "9") {
      answer += "j";
    }
  }


  return answer;
}