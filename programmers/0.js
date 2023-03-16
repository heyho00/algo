// 연습장
// node 0.js

// 1. 요소 중 3개를 뽑아 만드는 부분배열의 경우의 수를 구한다
// 2. 그 중 세 요소 더한게 0인 배열의 수를 리턴.

function solution(left, right) {
  let answer =0;

  function getMeasure(n){
    let cnt = 1
    let arr =[]
    while(n>=cnt){
      n%cnt ===0 && (arr.push(cnt))
      cnt++
    }
    return arr.length %2===0 ? n : -n
  }

  for(let i=left; i<=right; i++){
    answer+=getMeasure(i)
  }
  return answer
}

console.log(solution(13, 17));


// 0,1,2
// 0,1,3
// 0,1,4

// 0,2,3
// 0,2,4
// 0,3,4

// 1,2,3
// 1,2,4

// 2,3,4
