"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
function up(utils) {
    return __awaiter(this, void 0, void 0, function* () {
        const toReplace = constants_1.CONFIG.WEBSERVER.HOSTNAME + ':443';
        const by = constants_1.CONFIG.WEBSERVER.HOST;
        const replacer = column => `replace("${column}", '${toReplace}', '${by}')`;
        {
            const query = `UPDATE video SET url = ${replacer('url')}`;
            yield utils.sequelize.query(query);
        }
        {
            const query = `
      UPDATE actor SET url = ${replacer('url')}, "inboxUrl" = ${replacer('inboxUrl')}, "outboxUrl" = ${replacer('outboxUrl')},
      "sharedInboxUrl" = ${replacer('sharedInboxUrl')}, "followersUrl" = ${replacer('followersUrl')},
      "followingUrl" = ${replacer('followingUrl')}
    `;
            yield utils.sequelize.query(query);
        }
        {
            const query = `UPDATE server SET host = replace(host, ':443', '')`;
            yield utils.sequelize.query(query);
        }
    });
}
exports.up = up;
function down(options) {
    throw new Error('Not implemented.');
}
exports.down = down;
