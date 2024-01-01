function solution(numbers) {
  var answer = 0;
  var arr1 = numbers.sort((a,b)=>a-b);
  var arr2 = arr1[0] * arr1[1];
  var arr3 = arr1[arr1.length - 1] * arr1[arr1.length - 2];

  if(arr2 > arr3){
    answer = arr2;
  }else if(arr2 === arr3){
    answer = arr2;
  }else{
    answer = arr3
  }

  return answer;
}