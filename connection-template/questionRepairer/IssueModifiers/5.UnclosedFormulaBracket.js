import ModifiersSupplement from "../ModifiersSupplement.js";

class UnclosedFormulaBracket extends ModifiersSupplement {
  constructor(question) {
    super({
      question,
      regex: null,
      updateNeeded: false,
      flagName: 'UnclosedFormulaBracket'
    })
  }

  textDetector (htmlElement) {
    let parser = new DOMParser()
    let document = parser.parseFromString(htmlElement, 'text/html')
    let isDetected = false
    document.querySelectorAll('p').forEach(paragraphEl => {
      const paragraphElWithUnclosedFormulaBracket = paragraphEl.innerHTML.match(/\\\[|\\\]/g)
      if (paragraphElWithUnclosedFormulaBracket && ((paragraphElWithUnclosedFormulaBracket.includes('\\[') &&
        !paragraphElWithUnclosedFormulaBracket.includes('\\]'))
        || (paragraphElWithUnclosedFormulaBracket.includes('\\]') &&
        !paragraphElWithUnclosedFormulaBracket.includes('\\['))
      )) {
        isDetected = true
      }
    })
    return isDetected
  }
}
export default UnclosedFormulaBracket
