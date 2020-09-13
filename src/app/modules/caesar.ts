import { convertToString, isEmpty, isAlphanumeric, shiftIndexValue, isUpperCase } from './helpers'
import { generateAlphabet } from './generateAlphabet'

const alphabet: string[] = generateAlphabet()

export const caesarRot = (value: string, rot: number): string => {
  const valueString: string = convertToString(value)
  const valueArray: string[] = valueString.split('')
  let resultString = ''

  if (isEmpty(value)) throw new Error('Given string is empty!')

  valueArray.forEach((char) => {
    if (!isAlphanumeric(char)) return (resultString = resultString.concat(char))

    const valueIndex: number = alphabet.indexOf(char.toLowerCase())
    const newValueIndex: number = shiftIndexValue(valueIndex, rot, alphabet.length)
    const newChar: string = alphabet[newValueIndex]

    resultString = isUpperCase(char)
      ? resultString.concat(newChar.toUpperCase())
      : resultString.concat(newChar)
  })

  return resultString
}
