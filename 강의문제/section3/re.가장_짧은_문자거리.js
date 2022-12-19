// "한 개의 문자열 s와 문자 t가 주어지면 문자열 s의 각 문자가 문자 t와 떨어진 최소거리를 출력하는 프로그램을 작성하세요.";

function solution(str, t) {
  let answer = [];
  let p = 0;

  for (let x of str) {
    if (x === t) {
      p = 0;
      answer.push(p);
    } else {
      p++;
      answer.push(p);
    }
  }

  p = 0;
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === t) p = 0;
    else {
      p++;
      answer[i] = Math.min(answer[i], p);
    }
  }

  return answer;
}

console.log(solution("teachermode", "e"));
