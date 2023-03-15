// 연습장
// node 0.js

function solution(n1, d1, n2, d2) {
  if (d2 % d1 === 0) {
    n1 *= (d2 / d1)
    d1 *= (d2 / d1)
  }
  console.log(n1, d1, 'sss')
  return
}

console.log(solution(1, 2, 3, 4));
