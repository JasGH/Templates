import ModifiersSupplement from "../ModifiersSupplement.js";

class EmptyFormulaElements extends ModifiersSupplement {
  constructor(question) {
    super({
      question,
      regex: null,
      updateNeeded: false,
      flagName: 'EmptyFormulaElements'
    })
  }

  textDetector (htmlElement) {
    let parser = new DOMParser()
    let document = parser.parseFromString(htmlElement, 'text/html')
    let isDetected = false
    document.querySelectorAll('span[data-katex]').forEach(spanEl => {
      if (spanEl.innerHTML === '$$' || spanEl.innerHTML === '' || spanEl.innerHTML === '$'){
        isDetected = true
      }
    })
    return isDetected
  }

  convertorBaseMethod (htmlElement) {
    let parser = new DOMParser()
    let document = parser.parseFromString(htmlElement, 'text/html')
    document.querySelectorAll('span[data-katex]').forEach(spanEl => {
      if (spanEl.innerHTML === '$$' || spanEl.innerHTML === '' || spanEl.innerHTML === '$'){
        spanEl.remove()
      }
    })
    return document.querySelector('body').innerHTML
  }
}
export default EmptyFormulaElements
