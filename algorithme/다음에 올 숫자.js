// const common =[1,2,3,4]
// const common =[2,4,8]
const common = [1, 3, 9, 27]

function solution(arr) {
    var answer = 0;
    let last = arr.length-1
    
    if(arr[0]-arr[1] === arr[1]-arr[2]){
        answer = arr[last]+arr[1]-arr[0]
    } else {
        answer = arr[last]*arr[1]/arr[0]   
    }    
    return answer;
}

console.log(solution(common))