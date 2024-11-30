function solution(s, e) {
    var answer = [];
    for(let i=e; i<=s; i++){
        answer.push(i)
    }
    return answer.sort((a,b)=> a+b).reverse();
}