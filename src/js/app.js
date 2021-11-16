export default class ErrorRepository {
  constructor() {
    this.mapErr = new Map([
      [101, 'Ошибка: в имени должно быть min - 2 символа, max - 10'],
      [102, 'Ошибка типа персонажа!!'],
      [103, 'Описание пока еще недоступно'],
      [104, 'Not valid1!'],
      [105, 'Not valid2!'],
      [106, 'Ошибка! Такой персонаж уже добавлен!'],
    ]);
  }

  translate(code) {
    const text = this.mapErr.has(code) ? this.mapErr.get(code) : 'Unknown error';
    return text;
  }
}
