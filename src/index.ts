import 'normalize.css'
import './scss/style.scss'
import * as app from './app'

const bottomBg = document.querySelector<HTMLElement>('.bottom-bg--js')!
const bodyTarget = document.querySelector<HTMLBodyElement>('.body--js')!
const rotSelect = document.querySelector<HTMLSelectElement>('.rot-select--js')!
const inputText = document.querySelector<HTMLInputElement>('.input-text--js')!
const outputText = document.querySelector<HTMLParagraphElement>('.output-text--js')!
const targetElements: {
  rot: HTMLSelectElement
  input: HTMLInputElement
  output: HTMLParagraphElement
} = {
  rot: rotSelect,
  input: inputText,
  output: outputText,
}

app.adjustTheBottomImageWidth(bottomBg)
app.generateOptions(rotSelect)

inputText.addEventListener('click', (): void => {
  app.clearTextFields([inputText, outputText])
})
bodyTarget.addEventListener('click', ({ target }: MouseEvent) => {
  app.runCaesar(target, null, targetElements)
})
inputText.addEventListener('keyup', ({ target, key }: KeyboardEvent) => {
  app.runCaesar(target, key, targetElements)
})
