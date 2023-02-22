// 연습장 
// node 0.js

function solution(n, m) {
    let za = 1
    let mo = 1
    let num = n

    while(num> n-m){
        za*=num
        num--
    }

    while(m>0){
        mo*=m--
    }
    
    return za/mo   
}


console.log(solution(5,3)) //3
