// 연습장 
// node 0.js

// function solution(nums, k) {
//    let answer = []
//    while(nums.length){
//       answer.push(nums.splice(0,k))
//    }
//    return answer
// }

function solution(num_list, n) {
    return Array(num_list.length / n).fill(0).map(() => num_list.splice(0, n))
}


// console.log(solution([1, 2, 3, 4, 5, 6, 7, 8], 2))


console.log(solution([100, 95, 2, 4, 5, 6, 18, 33, 948],3))