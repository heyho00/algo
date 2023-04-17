// N개의 문자열이 입력되면 중복된 문자열은 제거하고 출력하는 프로그램을 작성하세요.
// 출력하는 문자열은 원래의 입력순서를 유지합니다."

function solution(arr) {
  let answer = [];

  arr.forEach((w) => {
    !answer.includes(w) && answer.push(w);
  });

  return answer;
}

console.log(solution(["good", "time", "good", "time", "student"]));
