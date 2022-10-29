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

const For = (World) => {
  return new Promise((resolve, reject) => {
    const s = []
    for (let token of World) {
      s.push(token.text)
    }
    resolve(s)
  })
}

const str = (process && process.argv[2])
const doc = new Doc(str.split(''), [])

For(doc)
  .then((res) => {
    console.log(res)
  })
  .finally(() =>{
    console.log(For)
  })

// EOF
