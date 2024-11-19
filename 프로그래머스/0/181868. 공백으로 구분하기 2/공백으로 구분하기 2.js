function solution(my_string) {
    return my_string.replaceAll("    ", " ").split(" ").filter((value)=> value !== "");
}