import { caesarRot } from '../app/modules/caesar'

describe('Caesar ROT: create a caesar ROT cipher code from the given value.', () => {
  describe('check if input value is empty then send error message', () => {
    test('is empty', () => {
      const value = ''
      const rot = 13
      expect(() => {
        caesarRot(value, rot)
      }).toThrowError(new Error('Given string is empty!'))
    })
  })

  describe('check if input is not alphanumeric then return the input', () => {
    test('is not alphanumeric', () => {
      const value = '!'
      const rot = 13
      expect(caesarRot(value, rot)).toBe('!')
    })
  })

  describe('check if the given string was ciphered by the ROT', () => {
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
