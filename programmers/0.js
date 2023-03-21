// 연습장
// node 0.js

// 1. 요소 중 3개를 뽑아 만드는 부분배열의 경우의 수를 구한다
// 2. 그 중 세 요소 더한게 0인 배열의 수를 리턴.

function solution(arr) {
  const n = arr.length;
  const result = [];

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        const sum = arr[i] + arr[j] + arr[k];
        if (sum === 0) {
          result.push([arr[i], arr[j], arr[k]]);
        }
      }
    }
  }
  return result.length;
}

console.log(solution([-2, 3, 0, 2, -5])); //2  ㄹㄴㄹㅇㄴ
