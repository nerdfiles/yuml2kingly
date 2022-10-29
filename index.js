/**
 * @description .
 */

// ## includes

const fs = require('fs')
const path = require('path')
const { Doc, Span } = require('spacy')

// ## tools

const log = console.log
const review = console.table

/**
 * has.
 *
 * @param {} p
 */
const has = (t, p) =>
  t.text.includes(p)

/**
 * holds.
 *
 * @param {} q
 */
const holds = (t, q) =>
  t.text.indexOf(q) !== -1

const Phraser = () => {}
const Axiomnizer = () => {}
const Lexer = () => {}
const Parser = () => {}

/**
 * If.
 *
 * @param {} condition
 */
const If = (condition) => {
  return new Promise((resolve, reject) => {
    const ERROR = {
      status: !condition ? 400 : 200,
      message: !condition ? 'no input' : condition
    }

    // happy path
    !condition && reject(ERROR)

    // not non-un-happy path
    condition && resolve(condition)
  })
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

      // found something yuml-ish
      If(
        has(token, parenLeft) ||
        has(token, parenRight)
      )
        .then((response) => {
          list.push([
            STATEMENT,
            ':',
            response
          ].join(''))
        })
        .catch((error) => {
          return new BespokeError(error)
        })
        .finally(() => {})
    }

    resolve(list)
  })
}

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

const FILENAME = (process && process.argv[2])
const FILEPATH = path.join(__dirname, FILENAME)
const FILE = fs.readFileSync(FILEPATH, 'utf-8')
const SEP = ''
const SPLIT_FILE = FILE.split(SEP)
const DOCUMENT = new Doc(SPLIT_FILE, [])
const INPUT = DOCUMENT || []

const STATEMENT = '(R) => (R)'

// review(DOCUMENT)

/**
 * BespokeError.
 */
class BespokeError {
  constructor (error) {
    return new Error({
      status: '400',
      message: error
    })
  }
}

For(INPUT)
  .then((res) => {
    review(res)
    return res
  })
  .catch(error => {
    return new BespokeError(error)
  })

// EOF
