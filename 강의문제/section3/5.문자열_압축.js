
//       `알파벳 대문자로 이루어진 문자열을 입력받아 같은 문자가 연속으로 반복되는 경우 반복되는 
// 문자 바로 오른쪽에 반복 횟수를 표기하는 방법으로 문자열을 압축하는 프로그램을 작성하시
// 오. 단 반복횟수가 1인 경우 생략합니다.`;

      function solution(word) {
        let answer= ''
        let temp = ''
        let cnt;

        
        // let arr = word.split("");
        // for (let i = 0; i < arr.length; i++) {
        //   if (arr[i] === arr[i - 1] && i - 1 >= 0) {
        //     cnt++;
        //   } else {
        //     if (cnt !== 1) {
        //       answer += cnt + arr[i];
        //       cnt = 1;
        //     } else {
        //       answer += arr[i];
        //     }
        //   }
        // }

        for(w of word) {
          if(w !== temp){
            temp = w;
            answer+=temp;
            cnt = 1;
          } else {
            cnt++
            if(cnt >= 3) {
              answer = answer.slice(0, answer.length-1)+cnt
            } else {
              answer+=cnt
            }
          }
        }

        return answer;
      }

      console.log(solution("KKHSSSSSSSE"));
      console.log(solution("SSSEEOOW"));
      console.log(solution("SKSDDDDAASE"));
 