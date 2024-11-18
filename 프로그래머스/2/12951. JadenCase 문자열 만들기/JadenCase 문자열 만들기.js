function solution(s) {
    var answer = '';
    console.log([...s.split(" ")],"aasdasd")
   answer = s.split(" ").map((value,index)=>{
      return index === 0 && Number(value) === NaN ? value : [...value].map((val, idx)=> {
          if(idx === 0){
             return val.toUpperCase();
          }else{
              return val.toLowerCase();
          }
      }).join("");
    })
    return answer.join(" ");
}