test("voy a comprobar de sumar 2 y 2 y me debería dar 4", () => {
  expect(sum(2, 3)).toBe(4);
});

function sum(a, b) {
  return a + b;
}
