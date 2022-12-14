
      // "길이가 서로 다른 A, B, C 세 개의 막대 길이가 주어지면 이 세 막대로 삼각형을 만들 수 있 으면 'YES'를 출력하고, 만들 수 없으면 'NO'를 출력한다. ";

      function solution(a, b, c) {
        let answer = "YES"
        let lines = [a,b,c].sort((a,b) => {return a-b});

        lines[0]+lines[1] <= lines[2] && (answer = 'NO')
        
        return answer;
      }

      console.log(solution(3, 4, 5))