function solution(s) {
    var answer = s.split(" ").map((val)=>{
        return [...val].map((val2, i)=>{
            if(i % 2 === 0){
                return val2.toUpperCase();
            }else{
                return val2.toLowerCase();
            }
        }).join("")
    }).join(" ");
    return answer;
}
