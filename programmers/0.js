// 연습장 
// node 0.js

function solution(n) {
    let i = 1;
    let f = 1;
    while (f * i < n) {
        console.log(i, '11')
        f *= ++i
        console.log(i, f, '22')
    }

    return i;
}

console.log(solution(3628800))
console.log(solution(7)) //3

