import 'normalize.css'
import './scss/style.scss'
import { bottomBg, bodyTarget, rotSelect, inputText, outputText } from './app/modules/htmlSelectors'
import * as app from './app'

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
