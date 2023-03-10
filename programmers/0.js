// 연습장 
// node 0.js

function solution(n) {
    return n % 7 === 0 ? (n / 7) : ~~(n / 7) + 1
}

console.log(solution(15))
