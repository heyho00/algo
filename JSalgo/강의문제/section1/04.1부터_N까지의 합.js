// "자연수 N이 입력되면 1부터 N까지의 합을 출력하는 프로그램을 작성하세요.";

function solution(n) {
  let answer = 0;
  let i = 1;

  while (i <= n) {
    answer += i;
    i++;
  }
  return answer;
}

console.log(solution(10));
