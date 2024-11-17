function solution(num_list) {
    var answer = num_list.length >= 11  ? num_list.reduce((sum, crr)=> sum + crr) : num_list.reduce((sum, crr)=> sum * crr)
    return answer;
}