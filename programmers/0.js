// 연습장
// node 0.js

function solution(arr) {
  let obj = {};
  let answer = [];

  arr.forEach((n) => {
    obj[n] == undefined ? (obj[n] = 1) : (obj[n] += 1);
  });

  let value = Math.max(...Object.values(obj));

  for (let x in obj) {
    obj[x] === value && answer.push(x);
  }

  return answer.length > 1 ? -1 : Number(answer[0]);
}

console.log(solution([1, 1, 1, 1, 1, 1, 2, 2, 3, 3, 3, 4]));
