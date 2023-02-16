// 연습장 
// node 0.js

function solution(n) {
    let dp = new Array(n+1).fill(1)
    // console.log(dp)
    for(let i = 2 ; i <= n ; i++){
        if(dp[i]){
            for(let j = 2 ; i*j <= n ; j++){
                dp[i*j] = 0
            }
        }
    }

    return dp.filter(el => el === 0).length
}

console.log(solution(15))
// console.log(solution(7)) 

