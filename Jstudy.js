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

/*Boolean
Boolean은 참, 거짓 (true/false)로 데이터를 표현하는 것이다. */
let myAnswer = true;

let yourAnswer = false;

console.log(myAnswer);
// true가 출력된다.
// 맞는지 틀린지 구분할 때 사용되는 데이터 타입이다. 그래서 조건문에서 많이 활용이 된다.

/*이제 참조타입에 대해 알아 보자.
Array는 값이 일렬로 모여있는 배열이다. 
예) [19, 44, 'good', false]
대괄호 안에 각기 다른 타입의 데이터들이 들어갈 수 있다.*/
let studentsName = ["Code Kim", "Wecode Chung"];

console.log(studentsName);
//[ 'Code Kim', 'Wecode Chung' ]이 출력된다.

//Object 객체
/*Object 객체 또한 여러가지 데이터들이 모여있는 묶음이다.
Array 배열과는 달리 Object는 앞에 '키'라고 해서 이름을 붙여야한다.
예) {name: 'Code Kim', isDeveloper: true}
여기서 name과 isDeveloper는 key이고
'Code Kim'과 true가 value라고 한다.*/
let myObject = {
  name: "Code Kim",
  isDeveloper: true,
};

console.log(myObject);
//{name: 'Code Kim', isDeveloper: true}라고 출력된다.
