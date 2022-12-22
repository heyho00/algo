function solution(arr) {
  let answer,
    max = Number.MIN_SAFE_INTEGER;

  for (let x of arr) {
    let sum = x
      .toString()
      .split("")
      .reduce((a, b) => a + b - 0, 0);

    //   tmp = x;
    // while (tmp) {
    //   sum += tmp % 10;
    //   tmp = Math.floor(tmp / 10);
    // }

    if (sum > max) {
      max = sum;
      answer = x;
    } else if (sum === max) {
      if (x > answer) answer = x;
    }
  }

  return answer;
}

console.log(solution([128, 460, 603, 40, 521, 137, 123]));
