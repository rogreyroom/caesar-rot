import { convertToString, isEmpty, isAlphanumeric } from '../app/modules/caesar'

describe('Caesar13: create a caesar13 cipher code from the given value.', () => {
  describe('change given input to the string', () => {
    test('returns a string value from the given 1122mmm string', () => {
      const input = '1122mmm'
      expect(convertToString(input)).toBe('1122mmm')
    })

    test('returns a string value from the given 1122 number', () => {
      const input = 1122
      expect(convertToString(input)).toBe('1122')
    })
  })

  describe('check if the given input string is empty', () => {
    test('is empty', () => {
      const input = ''
      expect(isEmpty(input)).toBe(true)
    })

    test('is not empty', () => {
      const input = 'aaa'
      expect(isEmpty(input)).toBe(false)
    })
  })

  describe('check if the given input string is alphanumeric', () => {
    test('is the "a" string alphanumeric', () => {
      const input = 'a'
      expect(isAlphanumeric(input)).toBe(true)
    })
    test('is the "B" string alphanumeric', () => {
      const input = 'B'
      expect(isAlphanumeric(input)).toBe(true)
    })
    test('is the "111" string alphanumeric', () => {
      const input = '111'
      expect(isAlphanumeric(input)).toBe(true)
    })
    test('is not "!" an alphanumeric', () => {
      const input = '!'
      expect(isAlphanumeric(input)).toBe(false)
    })
    test('is not "$" an alphanumeric', () => {
      const input = '$'
      expect(isAlphanumeric(input)).toBe(false)
    })
    test('is not "}" an alphanumeric', () => {
      const input = '}'
      expect(isAlphanumeric(input)).toBe(false)
    })
  })
})
