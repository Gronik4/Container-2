import ErrorRepository from '../app';

const expected = ['Ошибка: в имени должно быть min - 2 символа, max - 10', 'Unknown error'];

test('Test Cntainers N1', () => {
  const result = new ErrorRepository().translate(101);
  expect(result).toBe(expected[0]);
});

test('Test Cntainers N2', () => {
  const result = new ErrorRepository().translate(109);
  expect(result).toBe(expected[1]);
});
