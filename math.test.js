const { add, subtract, multiply, divide, isEven } = require("./math");

test("add: 2 + 3 = 5", () => {
  expect(add(2, 3)).toBe(5);
});

test("subtract: 10 - 4 = 6", () => {
  expect(subtract(10, 4)).toBe(6);
});

test("multiply: 3 * 4 = 12", () => {
  expect(multiply(3, 4)).toBe(12);
});

test("divide: 20 / 5 = 4", () => {
  expect(divide(20, 5)).toBe(4);
});

test("isEven: 8 is even", () => {
  expect(isEven(8)).toBe(true);
});
