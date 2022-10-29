/**
 * @description .
 */

// ## includes

const { Doc, Span } = require('spacy')

// ## tools

const Phraser = () => {}
const Axiomnizer = () => {}
const Lexer = () => {}
const Parser = () => {}

// ## constants
// ## inputs
// ## program
// ## output
// ## outcome (e.g., export default above)
// ## try
// ## test

/**
 * Concept.
 */
class Concept {
  constructor () {
  }
  extract () {
    return Parser()
  }
  transform () {
    return Axiomnizer()
  }
  init () {
    return Phraser(Lexer())
  }
}

/**
 * KinglyDocument.
 *
 * @extends {Doc}
 */
class KinglyDocument extends Doc {
}

/**
 * YumlDocument.
 *
 * @extends {Doc}
 */
class YumlDocument extends Doc {
}

const str = (process && process.argv[2])
const doc = new Doc(str.split(''), [])
for (let token of doc) {
  console.table(token.text)
}

// EOF
