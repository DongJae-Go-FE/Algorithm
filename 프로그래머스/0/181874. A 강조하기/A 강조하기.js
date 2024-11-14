function solution(myString) {
    var answer = [...myString].map((value)=>{
        if(value === "a"){
            return value.toUpperCase();
        }else if(value === "A"){
            return value;
        }else{
            return value.toLowerCase();
        }
    });
    return answer.join("");
}