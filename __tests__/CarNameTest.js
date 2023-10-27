import Validator from '../src/classes/Validator';
import { ERROR_MESSAGE } from '../src/constant/message';

describe('자동차 이름 입력값 유효성 테스트', () => {
  test('공백 입력 시 에러 반환 테스트', () => {
    expect(() => Validator.emptyInput(' ')).toThrow(new Error(ERROR_MESSAGE.EMPTY_INPUT));
  });

  test('특수문자 포함 시 에러 반환 테스트', () => {
    expect(() => Validator.specialCharactor('!@#')).toThrow(new Error(ERROR_MESSAGE.INVALID_INPUT));
  });

  test('자동차 이름이 2개 이상인지 테스트', () => {
    expect(() => Validator.overTwoNames('abc')).toThrow(new Error(ERROR_MESSAGE.LESS_TWO_NAME));
  });
});
