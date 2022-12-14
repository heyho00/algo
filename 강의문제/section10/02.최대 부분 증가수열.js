// N개의 자연수로 이루어진 수열이 주어졌을 때, 그 중에서 가장 길게 증가하는(작은 수에서 큰
//     수로) 원소들의 집합을 찾는 프로그램을 작성하라. 예를 들어, 원소가 2, 7, 5, 8, 6, 4, 7,
//     12, 3 이면 가장 길게 증가하도록 원소들을 차례대로 뽑아내면 2, 5, 6, 7, 12를 뽑아내어 길
//     이가 5인 최대 부분 증가수열을 만들 수 있다.

function solution(list) {
    let answer = []

    for(let i =0; i<list.length-1;i++){
        let upList = [list[i]]
        for(let j=i;j<list.length-1;j++){
            list[j]<list[j+1] && upList.push(list[j+1])
        }
        
        answer.length < upList.length && (answer = upList)
    }
    return answer.length;
}

//4
console.log(solution([5, 3, 7, 8, 6, 2, 9, 4]))