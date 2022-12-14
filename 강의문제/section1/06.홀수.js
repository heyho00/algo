// "7개의 자연수가 주어질 때, 이들 중 홀수인 자연수들을 모두 골라 그 합을 구하고, 고른 홀수들 중 최소값을 찾는 프로그램을 작성하세요.";

// function solution(Arr) {
//   let answer;
//   sum = 0;

//   Arr.forEach((num) => {
//     //   if (num % 2 !== 0) {
//     //     sum += num;
//     //   }
//     return num % 2 !== 0 && (sum += num);
//   });

//   let OddArr = Arr.filter((num) => {
//     return num % 2 !== 0;
//   });

//   // minNum = Math.min.apply(null, OddArr); // 정상작동
//   // minNum = Math.min.apply(OddArr); //그대로 넣으면 안됨.
//   minNum = Math.min(...OddArr);

//   answer = [sum, minNum];
//   document.write(sum, "<br>");
//   document.write(minNum, "<br>");
//   return answer;
// }
function solution(list) {
  let oddList = list.filter((item) => {
    return item % 2 !== 0;
  });

  let min = Math.min(...oddList);
  let sumTotal = oddList.reduce((a, b) => a + b, 0);

  return [min, sumTotal];
}

console.log(solution([2, 3, 5, 6, 7, 8, 9]));
