// 연습장 
// node 0.js

function solution(price) {
    let percent = 0

    price >= 100000 && (percent = 5)
    price >= 300000 && (percent = 10)
    price >= 500000 && (percent = 20)

    return Math.floor(price * (1-percent/100))
}

console.log(solution(580000))
