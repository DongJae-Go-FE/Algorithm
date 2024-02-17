function solution(arr) {
    var answer = "";
    if(arr.length === 1){
        answer = [-1]
    }else{
     let arrSum = arr.filter((value) => value !== Math.min.apply(null, arr))
      console.log(arrSum)
      answer = arrSum
    }
    return answer;
}