import {
  convertToString,
  isEmpty,
  isAlphanumeric,
  isUpperCase,
  isOverArrayLength,
} from '../app/modules/caesar'

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

describe('check if the given argument is an upper case', () => {
  test('is the "A" string upper case', () => {
    const input = 'A'
    expect(isUpperCase(input)).toBe(true)
  })
  test('is the "B" string upper case', () => {
    const input = 'B'
    expect(isUpperCase(input)).toBe(true)
  })
  test('is not the "a" string upper case', () => {
    const input = 'a'
    expect(isUpperCase(input)).toBe(false)
  })
  test('is not the "j" string upper case', () => {
    const input = 'j'
    expect(isUpperCase(input)).toBe(false)
  })
  test('is not the "#" string upper case', () => {
    const input = '1'
    expect(isUpperCase(input)).toBe(false)
  })
})

describe('check if given index is bigger then array length', () => {
  const arrayLength = 26
  test('is index = 30 over array length with ROT13', () => {
    const indexValue = 30
    const rot = 13
    expect(isOverArrayLength(indexValue, arrayLength, rot)).toBe(true)
  })
  test('is index = 27 over array length with ROT13', () => {
    const indexValue = 27
    const rot = 13
    expect(isOverArrayLength(indexValue, arrayLength, rot)).toBe(true)
  })
  test('is not index = 1 over array length  with ROT13', () => {
    const indexValue = 1
    const rot = 13
    expect(isOverArrayLength(indexValue, arrayLength, rot)).toBe(false)
  })
  test('is not index = 12 over array length with ROT13', () => {
    const indexValue = 12
    const rot = 13
    expect(isOverArrayLength(indexValue, arrayLength, rot)).toBe(false)
  })
})
