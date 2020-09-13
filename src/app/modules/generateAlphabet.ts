export const generateAlphabet = (): string[] => {
  const alphabet: string[] = []
  const start: number = 'a'.charCodeAt(0)
  const end: number = 'z'.charCodeAt(0)

  for (let i: number = start; i < end + 1; i++) {
    alphabet.push(String.fromCharCode(i))
  }

  return alphabet
}
