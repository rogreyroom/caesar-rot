export const createCharArray = (): number[] => {
  return [...Array(14).keys()]
}

export const createOptionElement = (input: string): HTMLOptionElement => {
  const option: HTMLOptionElement = document.createElement('option')
  option.text = input
  option.value = input
  option.classList.add('option')
  return option
}

export const generateOptions = (rotSelectElement: HTMLSelectElement): void => {
  const optionsArray: number[] = createCharArray()

  optionsArray.forEach((item: number) => {
    const newOption: HTMLOptionElement = createOptionElement(item.toString())
    if (item === 13) newOption.selected = true
    rotSelectElement.add(newOption)
  })
}
