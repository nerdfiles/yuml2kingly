/**
 * @description .
 */

// ## includes

const { Doc, Span } = require('spacy')

// ## tools

const log = console.log
const review = console.table
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
  /**
   * extract.
   */
  extract () {
    return Parser()
  }

  /**
   * transform.
   */
  transform () {
    return Axiomnizer()
  }

  /**
   * init.
   */
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

/**
 * For.
 *
 * @param {} World
 */
const For = (World) => {
  return new Promise((resolve, reject) => {
    const list = []
    for (const token of World) {
      const parenLeft = '('
      const parenRight = ')'
      const has = (p) => token.text.includes(p)
      if (has(parenLeft) || has(parenRight)) {
        list.push(token.text)
      }
    }
    resolve(list)
  })
}

const str = (process && process.argv[2])
const fs = require('fs')
const path = require('path')
const FILEPATH = path.join(__dirname, str)
const FILE = fs.readFileSync(FILEPATH, 'utf-8')
const SPLIT_FILE = FILE.split('')

const doc = new Doc(SPLIT_FILE, [])

/**
 * BespokeError.
 */
class BespokeError {
  constructor (msg) {
    return new Error({
      message: msg
    })
  }
}

console
  .table(
    For(doc || [])
      .then((res) => {
        log(res)
        return res
      })
      .catch(error => {
        return new BespokeError(error)
      })
  )

// EOF
