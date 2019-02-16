"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsToXliff12 = require("xliff/jsToXliff12");
const fs_1 = require("fs");
const path_1 = require("path");
const constants_1 = require("../../server/initializers/constants");
const translations = require('./iso_639-2.json');
const languages = constants_1.buildLanguages();
const iso639Translations = {
    target: path_1.join(__dirname, '../../../client/src/locale/target/iso639_de_DE.xml'),
    languages
};
saveToXliffFile(iso639Translations, err => {
    if (err)
        return handleError(err);
    process.exit(0);
});
function saveToXliffFile(jsonTranslations, cb) {
    const obj = {
        resources: {
            namespace1: {}
        }
    };
    Object.keys(jsonTranslations.languages)
        .filter(k => !!translations[k])
        .forEach(iso => {
        const englishText = jsonTranslations.languages[iso];
        obj.resources.namespace1[englishText] = {
            source: englishText,
            target: capitalizeFirstLetter(translations[iso].de[0])
        };
    });
    jsToXliff12(obj, (err, res) => {
        if (err)
            return cb(err);
        fs_1.writeFile(jsonTranslations.target, res, err => {
            if (err)
                return cb(err);
            return cb(null);
        });
    });
}
function handleError(err) {
    console.error(err);
    process.exit(-1);
}
function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
