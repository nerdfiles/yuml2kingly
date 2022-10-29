(async function () {
  const spacy = require('spacy')
  const nlp = spacy.load('en_core_web_sm')
  const doc = await nlp('This is a text about Facebook.')
  for (const ent of doc.ents) {
    console.log(ent.text, ent.label)
  }
  for (const token of doc) {
    console.log(token.text, token.pos, token.head.text)
  }
})()

const Parser = () => {}
class Doc {
  constructor () {}
  extract () {
    return Parser()
  }
  transform () {}
  init () {}
}
class KinglyDocument extends Doc {
}
class YumlDocument extends Doc {
}
