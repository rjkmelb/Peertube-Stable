"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize = require("sequelize");
function getSequelize(serverNumber) {
    const dbname = 'peertube_test' + serverNumber;
    const username = 'peertube';
    const password = 'peertube';
    const host = 'localhost';
    const port = 5432;
    return new Sequelize(dbname, username, password, {
        dialect: 'postgres',
        host,
        port,
        operatorsAliases: false,
        logging: false
    });
}
function setActorField(serverNumber, to, field, value) {
    const seq = getSequelize(serverNumber);
    const options = { type: Sequelize.QueryTypes.UPDATE };
    return seq.query(`UPDATE actor SET "${field}" = '${value}' WHERE url = '${to}'`, options);
}
exports.setActorField = setActorField;
function setVideoField(serverNumber, uuid, field, value) {
    const seq = getSequelize(serverNumber);
    const options = { type: Sequelize.QueryTypes.UPDATE };
    return seq.query(`UPDATE video SET "${field}" = '${value}' WHERE uuid = '${uuid}'`, options);
}
exports.setVideoField = setVideoField;
