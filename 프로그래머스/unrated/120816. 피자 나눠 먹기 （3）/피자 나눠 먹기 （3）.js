function solution(slice, n) {
  var answer = 0;
  if (n % slice != 0) {
    answer = n / slice + 1;
  } else {
    answer = n / slice;
  }
  return parseInt(answer);
}