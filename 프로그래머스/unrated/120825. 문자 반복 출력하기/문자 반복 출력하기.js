function solution(my_string, n) {
    var answer = '';
    let myString = [...my_string];
    for(let i = 0; i < myString.length; i++){
        for(let j= 0; j < n; j++){
            answer += myString[i];
        }
    }
    
    return answer;
}