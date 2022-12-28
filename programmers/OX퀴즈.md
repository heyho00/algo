덧셈, 뺄셈 수식들이 'X [연산자] Y = Z' 형태로 들어있는 문자열 배열 quiz가 매개변수로 주어집니다. 

수식이 옳다면 "O"를 틀리다면 "X"를 순서대로 담은 배열을 return하도록 solution 함수를 완성해주세요.

입출력 예

["3 - 4 = -3", "5 + 6 = 11"]	["X", "O"]

["19 - 6 = 13", "5 + 66 = 71", "5 - 15 = 63", "3 - 1 = 2"]	["O", "O", "X", "O"]


```JS
// function solution(quiz) {
//     let answer = []
    
//     for(let i =0; i<quiz.length;i++){
//         let expression = quiz[i].split('=')[0].replace(/ /g,'')
//         let minus = expression.split('-')
//         let plus = expression.split('+')
        
//         if(minus.length === 2) {
//            (minus[0]-0)-(minus[1]-0) == quiz[i].split('=')[1]-0 ? answer.push('O') : answer.push('X')
//         } else{ 
//            (plus[0]-0)+(plus[1]-0)  == quiz[i].split('=')[1]-0 ? answer.push('O') : answer.push('X')
//         }
//     }
    
//     return answer;
    
// }
// 틀림...;

function solution(quiz) {

  return quiz.map((n) => {
    const [evaluation, answer] = n.split(" = ");

    return eval(evaluation) === Number(answer) ? "O" : "X";
  });
}
```

## 다른 풀이

```js

function solution(quiz) {
    var answer = [];
    return quiz.map(t => {
        const [calc, result] = t.split(' = ');
        const sign = calc.includes('+') ? 1 : -1
        const [a, b] = calc.split(sign === 1 ? ' + ' : ' - ');

        return +a + (+b * sign) === +result ? 'O' : 'X'
    });
}

```