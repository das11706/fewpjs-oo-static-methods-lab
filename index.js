class Formatter {
  //add static methods here
  static capitalize(string) {
   return string.charAt(0).toUpperCase() + string.slice(1)
  }


  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9 '-]/g, '')
  }

  static titleize(sentence) {
    let exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    let arrayWords = sentence.split(" ");
    let newSentence = [];
    for (let i = 0; i < arrayWords.length; i++) {
      if (i === 0) {
        newSentence.push(this.capitalize(arrayWords[i]))
      } else {
        if (exceptions.includes(arrayWords[i])) {
          newSentence.push(arrayWords[i])
        } else {
          newSentence.push(this.capitalize(arrayWords[i]))
        }
      }
    }
    return newSentence.join(" ");
  }
}