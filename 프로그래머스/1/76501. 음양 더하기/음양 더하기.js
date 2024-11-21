function solution(absolutes, signs) {
    return signs.map((value, index) => value ? absolutes[index] : absolutes[index] * -1 ).reduce((arr, cur) => arr + cur);
}