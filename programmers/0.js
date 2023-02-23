// 연습장 
// node 0.js

function solution(rsp) {
    let answer = ''
    for (let x of rsp){
         switch(x) {
        case '0' :
            answer+='5'
            break;
        case '2' :
            answer+='0'
            break;
        case '5' :
            answer+='2'
            break;
        }
    }
    return answer
}


console.log(solution('205')) // '0'
