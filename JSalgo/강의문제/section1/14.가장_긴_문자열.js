"N개의 문자열이 입력되면 그 중 가장 긴 문자열을 출력하는 프로그램을 작성하세요.";

function solution(arr) {
  let answer = "";

  arr.forEach((w) => {
    answer.length < w.length && (answer = w);
  });

  return answer;
}

console.log(solution(["teacher", "time", "student", "beautiful", "good"]));
