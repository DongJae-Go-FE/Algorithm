function solution(phone_number) {
    return [...phone_number].map((value, index)=>{
        if(([...phone_number].length - 4) > index){
            return "*";
        }else{
            return value;
        }
    }).join("");
}