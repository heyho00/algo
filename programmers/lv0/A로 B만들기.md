문자열 before와 after가 매개변수로 주어질 때, before의 순서를 바꾸어 after를 만들 수 있으면 1을, 만들 수 없으면 0을 return 하도록 solution 함수를 완성해보세요.

입출력 예
before	after	result
"olleh"	"hello"	1
"allpe"	"apple"	0

```js

function solution(before, after) {
    let answer = 1
    let bef = before.split('').sort()
    let aft = after.split('').sort()
    
    bef.forEach((s,i) => s !== aft[i] && (answer = 0) )
    
    return answer
}

```

### 다른 풀이

```js

function solution(before, after) {
    return before.split('').sort().join('') === after.split('').sort().join('') ? 1 : 0;
}

```

```js

var solution=(a,b)=>![...a].reduce((t,i)=>t.replace(i,''),b).length*1

```