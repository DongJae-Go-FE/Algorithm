function solution(s){

    var arr = [...s].map((value)=> value.toLowerCase());
    var p = arr.filter((value) => value === "p");
    var y = arr.filter((value) => value === "y");

    return p.length === y.length ? true : false;
}