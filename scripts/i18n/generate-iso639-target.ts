import * as jsToXliff12 from 'xliff/jsToXliff12'
import { writeFile } from 'fs'
import { join } from 'path'
import { buildLanguages } from '../../server/initializers/constants'

const translations = require('./iso_639-2.json')

type TranslationType = {
  target: string
  languages: { [id: string]: string }
}

const languages = buildLanguages()

const iso639Translations = {
  target: join(__dirname, '../../../client/src/locale/target/iso639_de_DE.xml'),
  languages
}

saveToXliffFile(iso639Translations, err => {
  if (err) return handleError(err)

  process.exit(0)
})

function saveToXliffFile (jsonTranslations: TranslationType, cb: Function) {
  const obj = {
    resources: {
      namespace1: {}
    }
  }
  Object.keys(jsonTranslations.languages)
        .filter(k => !!translations[k])
        .forEach(iso => {
          const englishText = jsonTranslations.languages[ iso ]

          obj.resources.namespace1[ englishText ] = {
            source: englishText,
            target: capitalizeFirstLetter(translations[iso].de[0])
          }
        })

  jsToXliff12(obj, (err, res) => {
    if (err) return cb(err)

    writeFile(jsonTranslations.target, res, err => {
      if (err) return cb(err)

      return cb(null)
    })
  })
}

function handleError (err: any) {
  console.error(err)
  process.exit(-1)
}

function capitalizeFirstLetter (str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
