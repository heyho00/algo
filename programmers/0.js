// 연습장 
// node 0.js

function solution(n) {
  let cnt =1
  let answer="\n"

  while(cnt<=n){
    answer += '*'.repeat(cnt) +'\n'
    cnt++
  }

  return answer
}

console.log(solution(3)) 
