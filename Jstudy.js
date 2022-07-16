// Number
let myNumber1 = 0;
let myNumber2 = 2;
let myNumber3 = 500;
let myNumber4 = 10000;

console.log(myNumber1);
// 0이 출력된다.

console.log(myNumber1 + myNumber3);
// 0 + 500 이므로 500이 출력된다.
console.log(myNumber2 * myNumber3);
// 2 * 500 이므로 1000이 출력된다.
console.log(myNumber3 / myNumber2);
// 500 / 2 이므로 250이 출력된다.
console.log(myNumber3 % myNumber4);
// 500을 10000으로 나누면 몫이 0이고 나머지가 500이므로 500이 출력된다.
console.log(7 % 2);
// 7을 2로 나누면 나머지가 1이므로 1이 출력된다.

// string
console.log("coffee");

// 변수를 선언하고 문자열을 할당해보자
let myName = "SeYoung";
console.log(myName);
// SeYoung이 출력된다.

// Number 와 String을 같이 활용하면 어떻게 사용할 수 있을까?
let number1 = 100;
let number2 = 200;

console.log("100 plus 200 equals to", number1 + number2);
// 100 plus 200 equals to 300 이라고 출력된다.
// '100 plus 200 equals to'라는 문자열과 300이라는 Number가 같이 조합되어 출력된 것이다.

// 이런 방식은 디버깅 할 때 유용하게 사용된다.

console.log("number1:", number1);
// number1: 100 이라고 출력된다.
// 변수 number1의 값이 정확히 뭔지 확인할 수 있다.
