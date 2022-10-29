/**
 * @description .
 */

// ## includes

const spacy = require('spacy')

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
 * Doc.
 */
class Doc {
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

(async function () {
  const str = (process && process.argv[2]) || 'the cat is on the mat'
  console.log(str)
  const nlp = spacy.load('en_core_web_sm')
  const doc = await nlp(str)
  for (const ent of doc.ents) {
    console.log(ent.text, ent.label)
  }
  for (const token of doc) {
    console.log(token.text, token.pos, token.head.text)
  }
})()

// EOF
