import { generateAlphabet } from './generateAlphabet'

const alphabet: string[] = generateAlphabet()

export const convertToString = (input: string | number): string => {
  return input.toString()
}

export const isEmpty = (input: string): boolean => {
  return input === '' ? true : false
}

export const isAlphanumeric = (input: string): boolean => {
  return input.match(/[a-z]|[A-Z]|[0-9]/gi) !== null ? true : false
}

export const isUpperCase = (input: string): boolean => {
  return input.match(/[0-9]/gi) === null && input === input.toUpperCase() ? true : false
}

export const isOverArrayLength = (
  indexValue: number,
  arrayLength: number,
  rot: number,
): boolean => {
  return indexValue + rot > arrayLength - 1 ? true : false
}

export const shiftIndexValue = (index: number, rot: number, arrayLength: number): number => {
  if (isOverArrayLength(index, arrayLength, rot)) return rot - (arrayLength - index)

  return index + rot
}

export const caesarRot = (value: string, rot: number): string => {
  const valueString: string = convertToString(value)
  const valueArray: string[] = valueString.split('')
  let resultString = ''

  if (isEmpty(value)) throw new Error('Given string is empty!')

  valueArray.forEach((char) => {
    if (!isAlphanumeric) return (resultString = resultString.concat(char))

    const valueIndex: number = alphabet.indexOf(char.toLowerCase())
    const newValueIndex: number = shiftIndexValue(valueIndex, rot, alphabet.length)
    const newChar: string = alphabet[newValueIndex]

    resultString = isUpperCase(char)
      ? resultString.concat(newChar.toUpperCase())
      : resultString.concat(newChar)
  })

  return resultString
}
