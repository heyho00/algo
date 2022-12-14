// "7개의 수가 주어지면 그 숫자 중 가장 작은 수를 출력하는 프로그램을 작성하세요.";

// function solution(Arr) {
//   let answer = Arr[0];

//   for (let i = 0; i < Arr.length - 1; i++) {
//     Arr[i] < answer ? (answer = Arr[i]) : answer;
//   }

//   return answer;
// }

function solution(list) {
  return Math.min(...list);
}

console.log(solution([2, 4, 1, 5, 6, -7, 8]));
