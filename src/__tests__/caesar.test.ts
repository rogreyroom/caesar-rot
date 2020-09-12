import {
  convertToString,
  isEmpty,
  isAlphanumeric,
  isUpperCase,
  isOverArrayLength,
  shiftIndexValue,
  caesarRot,
} from '../app/modules/caesar'

describe('Caesar ROT: create a caesar ROT cipher code from the given value.', () => {
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

  describe('check if the given index is bigger then array length', () => {
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

  describe('check if the given index was shifted by the ROT', () => {
    const arrayLength = 26
    test('change index = 0  to index = 13 with the use of ROT13', () => {
      const indexValue = 0
      const rot = 13
      expect(shiftIndexValue(indexValue, rot, arrayLength)).toBe(13)
    })
    test('change index = 3  to index = 16 with the use of ROT13', () => {
      const indexValue = 3
      const rot = 13
      expect(shiftIndexValue(indexValue, rot, arrayLength)).toBe(16)
    })
    test('change index = 20  to index = 7 with the use of ROT13', () => {
      const indexValue = 20
      const rot = 13
      expect(shiftIndexValue(indexValue, rot, arrayLength)).toBe(7)
    })
    test('change index = 0  to index = 0 with the use of ROT0', () => {
      const indexValue = 0
      const rot = 0
      expect(shiftIndexValue(indexValue, rot, arrayLength)).toBe(indexValue)
    })
    test('change index = 25  to index = 25 with the use of ROT0', () => {
      const indexValue = 25
      const rot = 0
      expect(shiftIndexValue(indexValue, rot, arrayLength)).toBe(indexValue)
    })
    test('change index = 13  to index = 13 with the use of ROT0', () => {
      const indexValue = 13
      const rot = 0
      expect(shiftIndexValue(indexValue, rot, arrayLength)).toBe(indexValue)
    })
    test('change index = 1  to index = 6 with the use of ROT5', () => {
      const indexValue = 1
      const rot = 5
      expect(shiftIndexValue(indexValue, rot, arrayLength)).toBe(6)
    })
    test('change index = 10  to index = 15 with the use of ROT5', () => {
      const indexValue = 10
      const rot = 5
      expect(shiftIndexValue(indexValue, rot, arrayLength)).toBe(15)
    })
    test('change index = 24  to index = 3 with the use of ROT5', () => {
      const indexValue = 24
      const rot = 5
      expect(shiftIndexValue(indexValue, rot, arrayLength)).toBe(3)
    })
  })

  describe('check if the given string was ciphered by the ROT', () => {
    // const alphabet = generateAlphabet()

    test('change string "a" to "n" with the use of ROT13', () => {
      const value = 'a'
      const rot = 13
      expect(caesarRot(value, rot)).toBe('n')
    })
    test('change string "d" to "q" with the use of ROT13', () => {
      const value = 'd'
      const rot = 13
      expect(caesarRot(value, rot)).toBe('q')
    })
    test('change string "u" to "h" with the use of ROT13', () => {
      const value = 'u'
      const rot = 13
      expect(caesarRot(value, rot)).toBe('h')
    })
    test('change string "a" to "a" with the use of ROT0', () => {
      const value = 'a'
      const rot = 0
      expect(caesarRot(value, rot)).toBe(value)
    })
    test('change string "z" to "z" with the use of ROT0', () => {
      const value = 'z'
      const rot = 0
      expect(caesarRot(value, rot)).toBe(value)
    })
    test('change string "n" to "n" with the use of ROT0', () => {
      const value = 'n'
      const rot = 0
      expect(caesarRot(value, rot)).toBe(value)
    })
    test('change string "a" to "n" with the use of ROT5', () => {
      const value = 'a'
      const rot = 5
      expect(caesarRot(value, rot)).toBe('f')
    })
    test('change string "b" to "q" with the use of ROT5', () => {
      const value = 'b'
      const rot = 5
      expect(caesarRot(value, rot)).toBe('g')
    })
    test('change string "k" to "p" with the use of ROT5', () => {
      const value = 'k'
      const rot = 5
      expect(caesarRot(value, rot)).toBe('p')
    })
    test('change string "y" to "d" with the use of ROT5', () => {
      const value = 'y'
      const rot = 5
      expect(caesarRot(value, rot)).toBe('d')
    })
  })
})
