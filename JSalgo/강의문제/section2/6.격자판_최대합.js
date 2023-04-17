// "N*N의 격자판이 주어지면 각 행의 합, 각 열의 합, 두 대각선의 합 중 가장 큰 합을 출력합니다.";

function solution(arr) {
  let n = arr.length;
  let sum1 = (sum2 = sum3 = sum4 = 0);

  for (let i = 0; i < n; i++) {
    sum1 = sum2 = 0;
    for (let j = 0; j < n; j++) {
      sum1 += arr[i][j];
      sum2 += arr[j][i];
    }
  }

  for (let i = 0; i < n; i++) {
    sum3 += arr[i][i];
    sum4 += arr[i][n - i - 1];
  }

  return Math.max(sum1, sum2, sum3, sum4);
}

console.log(
  solution([
    [10, 13, 10, 12, 15],
    [12, 39, 30, 23, 11],
    [11, 25, 50, 53, 15],
    [19, 27, 29, 37, 27],
    [19, 13, 30, 13, 19],
  ])
);
