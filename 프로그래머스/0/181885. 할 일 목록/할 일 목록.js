function solution(todo_list, finished) {
    return todo_list.map((value, index)=> !finished[index] ? value : "").filter((value) => value !== "");
}