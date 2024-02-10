function solution(x, n) {
    var answer = [];
    for(let i = 1; i <= n; i++){
        let num = x * i;
        answer.push(num)
    }
    
    return answer;
}