function solution(arr, divisor) {
    var answer = [];
    let arrSort = arr.sort((a,b)=> a-b)
     for(let i = 0; i< arrSort.length; i++){
        if(arrSort[i] % divisor  === 0){
            answer.push(arr[i]);
        }
     }
    return answer.length === 0 ? answer = [-1] : answer;
}