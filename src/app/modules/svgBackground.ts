export const adjustTheBottomImageWidth = (bottomBg: HTMLElement): void => {
  const screenWidth = window.outerWidth
  bottomBg.setAttribute('width', `${screenWidth}`)
}
