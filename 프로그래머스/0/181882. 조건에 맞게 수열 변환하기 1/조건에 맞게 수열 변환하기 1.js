function solution(arr) {
    var answer = arr.map((value)=>{
        if(value < 50 && value % 2 === 1){
            return value * 2;
        }else if(value > 49 && value % 2 === 0){
            return value / 2;
        }else{
            return value
        }
    })
    return answer;
}