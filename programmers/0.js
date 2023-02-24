// 연습장 
// node 0.js

function solution(age) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    return String(age).split('').map(a => alphabet[a]).join('')
}

console.log(solution(23)) // "cd"
