/**
 * @jest-environment jsdom
 */

import { generateAlphabet } from '../app/modules/generateAlphabet'
import { createCharArray, createOptionElement } from '../app/modules/generateOptions'

describe('The project generators tests.', () => {
  describe('Generate the array with the alphabet', () => {
    const alphabet = [
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
      'g',
      'h',
      'i',
      'j',
      'k',
      'l',
      'm',
      'n',
      'o',
      'p',
      'q',
      'r',
      's',
      't',
      'u',
      'v',
      'w',
      'x',
      'y',
      'z',
    ]
    test('returns the alphabet', () => {
      expect(generateAlphabet()).toEqual(expect.arrayContaining(alphabet))
    })
  })

  describe('Generate the ROT options from 1 to 13 as na array', () => {
    test('return an array of chars', () => {
      const chars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
      expect(createCharArray()).toEqual(expect.arrayContaining(chars))
    })

    test('create list item with value and text equal 13', () => {
      const optionElement = document.createElement('option')
      optionElement.classList.add('option')
      optionElement.text = '13'
      optionElement.value = '13'

      expect(createOptionElement('13')).toEqual(optionElement)
    })
  })
})
