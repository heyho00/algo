// https://school.programmers.co.kr/learn/courses/30/lessons/120923

// num	total	result
// 3	12	[3, 4, 5]
// 5	15	[1, 2, 3, 4, 5]
// 4	14	[2, 3, 4, 5]
// 5	5	[-1, 0, 1, 2, 3]

function solution(num, total) {
    var answer = [];
    let n;
    let seq = 0;

    for(let i=1; i<num;i++){
        seq+=i
    }

    n = (total-seq)/num

    for(let j=0; j<num;j++){
        answer.push(n+j)
    }

    return answer;
}

