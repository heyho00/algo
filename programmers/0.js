// 연습장 
// node 0.js

function solution(nums, direc) {
    numbers = [...nums, ...nums]
    let leng = nums.length

    if (direc === 'right') {
        return numbers.splice(leng - 1, leng)
    }
    return numbers.splice(1, leng)
}


console.log(solution([1, 2, 3], 'right'))
console.log(solution([4, 455, 6, 4, -1, 45, 6], 'left'))

