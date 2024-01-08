function solution(my_string, num1, num2) {
  const arr = my_string.split("");

  let string1 = arr[num1];
  let string2 = arr[num2];

  arr.splice(num1, 1, string2);
  arr.splice(num2, 1, string1);

  return arr.join("");
}