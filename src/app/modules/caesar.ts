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
