function solution(strArr) {
    var answer = strArr.map((value, index)=> {
        if(index % 2 === 1){
            return value.toUpperCase()
        }else{
            return value.toLowerCase()
        }
    });
    return answer;
}