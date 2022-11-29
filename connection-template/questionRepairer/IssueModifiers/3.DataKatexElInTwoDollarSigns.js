import ModifiersSupplement from "../ModifiersSupplement.js";

class DataKatexElInTwoDollarSigns extends ModifiersSupplement {
  constructor(question) {
    super({
      question,
      regex: null,
      updateNeeded: false,
      flagName: 'DataKatexElInTwoDollarSigns'
    })
  }

  textDetector (htmlElement) {
    let parser = new DOMParser()
    let document = parser.parseFromString(htmlElement, 'text/html')
    let isDetected = false
    document.querySelectorAll('span[data-katex]').forEach(spanEl => {
      if (spanEl.innerHTML.includes('data-katex="true"')) {
        isDetected = true
      }
    })
    return isDetected
  }
}
export default DataKatexElInTwoDollarSigns
