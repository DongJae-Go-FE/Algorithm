function solution(n) {
    var answer = "";
    let arr = n.toString().split("").map((value) => {return Number(value)}).sort((a,b) => {return b-a});
    
    for(let i = 0; i < arr.length; i++){
        answer += arr[i].toString();
    }
    
    return Number(answer);
}