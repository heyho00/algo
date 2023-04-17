// "첫 줄에는 날짜의 일의 자리 숫자가 주어지고 두 번째 줄에는 7대의 자동차 번호의 끝 두 자 리 숫자가 주어진다.";

function solution(n, arr) {
  return arr.filter((car) => n == car % 10).length;
}

console.log(solution(3, [25, 23, 11, 47, 53, 17, 33]));
