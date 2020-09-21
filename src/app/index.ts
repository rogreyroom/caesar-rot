import { generateOptions } from './modules/generateOptions'
import { caesarRot } from './modules/caesar'
import { adjustTheBottomImageWidth } from './modules/svgBackground'

export { generateOptions, adjustTheBottomImageWidth }

export const clearTextFields = ([...textFields]): void => {
  console.log(textFields)
  textFields.forEach((el: HTMLSelectElement) => {
    if (el.hasAttribute('type')) {
      el.value = ''
    } else {
      el.textContent = ''
    }
  })
}

export const runCaesar = (
  target: EventTarget | null,
  key: string | null,
  elObj: { rot: HTMLSelectElement; input: HTMLInputElement; output: HTMLParagraphElement },
): void => {
  const { rot, input, output } = elObj
  const userClickedBody = target !== input && target !== rot

  if (input.value === '') return
  if (key === 'Enter' || userClickedBody) {
    const selectedRot = +rot.options[rot.selectedIndex].value
    output.textContent = caesarRot(input.value, selectedRot)
    input.value = ''
  }
}
