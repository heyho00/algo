
function solution(n, f){
    let answer, flag=0
    let dy= Array.from(Array(11), ()=> Array(11).fill(0));
    let ch = Array.from ({length:n+1}, ()=>0)
    let p=Array.from({length:n}, ()=>0);
    let b=Array.from({length:n}, ()=>0);

    function combi(n, r){
        if(dy[n][r]>0) return dy[n][r];
        if(n===r || r===0)return 1;
        else return dy[n][r] = combi(n-1, r-1)+combi(n-1, r)
    }

    function DFS(L, sum){
    }

    DFS(0,0)
    return answer;
}

console.log(solution(4, 16))