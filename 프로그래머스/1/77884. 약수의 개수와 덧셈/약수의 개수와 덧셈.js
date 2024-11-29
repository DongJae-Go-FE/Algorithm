function solution(left, right) {
    var arr = [];
    for(let i=left; i<=right; i++){
        arr.push(i);
    }
    var arr2 = arr.map((value)=>{
        let subArr = [...new Array(value)].map((_,index)=>{
            if(value%(index+1) === 0){
               return index+1
               }
        }).filter((val1)=> val1 !== undefined);
        return subArr.length % 2 === 0 ? value : -value;
    }).reduce((arr,crr)=>arr+crr);
    return arr2;
}