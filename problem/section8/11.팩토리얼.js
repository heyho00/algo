// 자연수 N을 입력하면 N!값을 구하세요.
//N! = n*(n-1)*(n-2)*.....*2*1입니다.
//만약 N=5라면 5!=5*4*3*2*1=120입니다.

// input
// 5
// output
// 120

function solution(n) {
  let answer = 1;

  function DFS(n) {
    if (n === 1) {
      return;
    } else {
      answer *= n;
      DFS(n - 1);
    }
  }

  DFS(n);
  return answer;
}

console.log(solution(5));
