function solution(order) {
  var answer = 0;
  var arr = [...order.toString()].map((num)=>{return Number(num)})

  for(let i = 0; i < arr.length; i++){
     if(arr[i] === 3){
         answer += 1;
     }
     if(arr[i] === 6){
         answer += 1;
     }
     if(arr[i] === 9){
         answer += 1;
     }
      
  }
  return answer;
}