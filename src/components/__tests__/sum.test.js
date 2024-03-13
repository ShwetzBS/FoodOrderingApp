import { sum } from "../sum";
//Takes in 2 arguments . First is a string(description of the test) , second is a callback function
test("Testing sum.js file", () => {
  const result = sum(3, 4);

  //Assertion -The result you expect
  expect(result.toBe(7)); // you are telling that expected result is 7
});
