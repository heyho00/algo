function solution(arr) {
  let sorted = arr.sort((a, b) => {
    return a - b;
  });

  let answer = new Set(sorted);

  return [...answer];
}

console.log(solution([87, 89, 92, 100, 76]));
console.log(solution([87, 89, 92, 100, 92]));
