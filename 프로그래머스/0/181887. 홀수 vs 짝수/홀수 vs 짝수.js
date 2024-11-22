function solution(num_list) {
    let arr1 = num_list.map((value, index) => index % 2 === 1 ? value : "").filter((value)=> value !== "").reduce((arr, cur)=> arr + cur);
    let arr2 = num_list.map((value, index) => index % 2 === 0 ? value : "").filter((value)=> value !== "").reduce((arr, cur)=> arr + cur);
    return arr1 > arr2 ? arr1 : arr2;
}