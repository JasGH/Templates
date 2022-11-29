import ModifiersSupplement from "../ModifiersSupplement.js";

class OddNumberOfDollarSigns extends ModifiersSupplement {
  constructor(question) {
    super({
      question,
      regex: null,
      updateNeeded: false,
      flagName: 'OddNumberOfDollarSigns'
    })
  }

  textDetector (htmlElement) {
    let parser = new DOMParser()
    let document = parser.parseFromString(htmlElement, 'text/html')
    let isDetected = false
    document.querySelectorAll('p').forEach(paragraphEl => {
      const paragraphElOddNumberOfDollarSigns = paragraphEl.innerHTML.match(/\$\$|\S/g)
      if (paragraphElOddNumberOfDollarSigns && paragraphElOddNumberOfDollarSigns.length % 2 !== 0) {
        isDetected = true
      }
    })
    return isDetected
  }
}
export default OddNumberOfDollarSigns
