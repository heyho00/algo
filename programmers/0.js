// 연습장 
// node 0.js

function solution(n) {
    let num = n
    let i = 2
    let answer = []

    while (num % i == 0) {
        answer.push(i)
        num = num / i
        num % i !== 0 && i++
    }

    return answer.length ? [...new Set(answer)] : [n]
}

console.log(solution(12))
console.log(solution(17))
console.log(solution(420))