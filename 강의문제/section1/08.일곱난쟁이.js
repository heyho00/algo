// "아홉 개의 줄에 걸쳐 난쟁이들의 키가 주어진다. 주어지는 키는 100을 넘지 않는 자연수이며, 아홉 난쟁이의 키는 모두 다르며, 가능한 정답이 여러 가지인 경우에는 아무거나 출력한다.";

// function solution(arr) {
//   let answer = arr; // 얕은 복사
//   let sum = arr.reduce((a, b) => a + b, 0); // 140

//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === 40) {
//         arr.splice(j, 1);
//         arr.splice(i, 1);
//       }
//     }
//   }
//   return answer;
// }

console.log(solution([20, 7, 23, 19, 10, 15, 25, 8, 13]));
