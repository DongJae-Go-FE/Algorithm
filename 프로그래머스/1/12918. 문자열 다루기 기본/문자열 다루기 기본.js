function solution(s) {
    var answer = true;
    
    if(s.length === 4 || s.length === 6){
       answer = [...s].map((value)=> Number(value)).includes(NaN) ? false : true;
    }else{
        answer = false
    }
    
    return answer;
}