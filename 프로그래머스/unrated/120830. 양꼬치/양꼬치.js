function solution(n, k) {
    var answer = 0;
    
    var main = n * 12000;
    var sub = (k * 2000) - (Math.floor(n / 10) * 2000)
    answer = main + sub;
    
    return answer;
}