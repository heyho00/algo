// 연습장 
// node 0.js

function solution(dot) {
    const [a, b] = dot
    if (a < 0) {
        if (b < 0) return 3
        else return 2
    } else {
        if (b < 0) return 4
        else return 1
    }
}


console.log(solution([7, 8]))
