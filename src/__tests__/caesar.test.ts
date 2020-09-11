import { convertToString } from '../app/modules/caesar'

describe('Caesar13: create a caesar13 cipher code from the given value.', () => {
  describe('change given input to the string', () => {
    test('returns a string value from the given 1122mmm string', () => {
      const input = '1122mmm'
      expect(convertToString(input)).toBe('1122mmm')
    })

    test('returns a string value from the given 1122 string', () => {
      const input = 1122
      expect(convertToString(input)).toBe('1122')
    })
  })
})
