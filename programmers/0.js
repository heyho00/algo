// 연습장
// node 0.js

// 1. 요소 중 3개를 뽑아 만드는 부분배열의 경우의 수를 구한다
// 2. 그 중 세 요소 더한게 0인 배열의 수를 리턴.

function solution(s) {
  return s.length % 2 === 0 
  ? s.split('').splice((s.length/2)-1, 2).join('')
  : s.split('').splice(~~(s.length/2),1).join('')
}

console.log(solution("abcde"));