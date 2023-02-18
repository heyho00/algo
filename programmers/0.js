// 연습장 
// node 0.js

function solution(nums, k) {
   while(nums.length < k*3){
    nums = [...nums,...nums]
   }
   console.log(nums,)
   return nums[(2*k)-2]
}


console.log(solution([1, 2, 3, 4], 2))


