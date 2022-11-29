import ModifiersSupplement from "../ModifiersSupplement.js";

class PossibilityOfTextLossForInequalitySigns extends ModifiersSupplement {
  constructor(question) {
    super({
      question,
      regex: null,
      updateNeeded: false,
      flagName: 'PossibilityOfTextLossForInequalitySigns'
    })
  }

  textDetector (htmlElement) {
    let parser = new DOMParser()
    let document = parser.parseFromString(htmlElement, 'text/html')
    let isDetected = false
    document.querySelectorAll('span[data-katex]').forEach(spanEl => {
      if (spanEl.innerHTML.includes('&lt;')){
        isDetected = true
      }
      if (spanEl.innerHTML.includes('&gt;')){
        isDetected = true
      }
    })
    return isDetected
  }
}
export default PossibilityOfTextLossForInequalitySigns
