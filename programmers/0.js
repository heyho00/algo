// 연습장 
// node 0.js

function solution(n, k) {
    const service = Math.floor(n/10)
    let beverage = k-service >0 ? k-service : 0
    return (12000 * n) + (2000*beverage)
}

console.log(solution(64, 6))