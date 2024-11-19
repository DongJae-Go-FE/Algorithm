function solution(a, b) {
    let num = 0;
    let arr = [a,b].sort((a,b)=> a-b);
    for(let i = arr[0]; i <= arr[1]; i++){
        num += i;
    }
    
    
    return answer = a === b ? a : num;
}