function solution(arr1, arr2) {
    var answer;
    if(arr1.length === arr2.length){
        var arr1Sum = arr1.reduce((accumulator, currentNumber) => accumulator + currentNumber);
        var arr2Sum = arr2.reduce((accumulator, currentNumber) => accumulator + currentNumber);
            
        arr1Sum === arr2Sum ? answer = 0 : arr1Sum > arr2Sum ? answer = 1 : answer = -1
        
    }
    if(arr1.length > arr2.length){
        answer = 1
    }
    if(arr1.length < arr2.length){
        answer = -1
    }
    
    return answer;
}