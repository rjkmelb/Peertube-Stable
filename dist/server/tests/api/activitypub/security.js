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
require("mocha");
const utils_1 = require("../../utils");
const initializers_1 = require("../../../initializers");
const activitypub_http_utils_1 = require("../../../lib/job-queue/handlers/utils/activitypub-http-utils");
const chai = require("chai");
const sql_1 = require("../../utils/miscs/sql");
const activitypub_1 = require("../../../helpers/activitypub");
const activitypub_2 = require("../../utils/requests/activitypub");
const expect = chai.expect;
function setKeysOfServer2(serverNumber, publicKey, privateKey) {
    return Promise.all([
        sql_1.setActorField(serverNumber, 'http://localhost:9002/accounts/peertube', 'publicKey', publicKey),
        sql_1.setActorField(serverNumber, 'http://localhost:9002/accounts/peertube', 'privateKey', privateKey)
    ]);
}
function setKeysOfServer3(serverNumber, publicKey, privateKey) {
    return Promise.all([
        sql_1.setActorField(serverNumber, 'http://localhost:9003/accounts/peertube', 'publicKey', publicKey),
        sql_1.setActorField(serverNumber, 'http://localhost:9003/accounts/peertube', 'privateKey', privateKey)
    ]);
}
describe('Test ActivityPub security', function () {
    let servers;
    let url;
    const keys = require('./json/peertube/keys.json');
    const invalidKeys = require('./json/peertube/invalid-keys.json');
    const baseHttpSignature = {
        algorithm: initializers_1.HTTP_SIGNATURE.ALGORITHM,
        authorizationHeaderName: initializers_1.HTTP_SIGNATURE.HEADER_NAME,
        keyId: 'acct:peertube@localhost:9002',
        key: keys.privateKey,
        headers: initializers_1.HTTP_SIGNATURE.HEADERS_TO_SIGN
    };
    before(function () {
        return __awaiter(this, void 0, void 0, function* () {
            this.timeout(60000);
            servers = yield utils_1.flushAndRunMultipleServers(3);
            url = servers[0].url + '/inbox';
            yield setKeysOfServer2(1, keys.publicKey, keys.privateKey);
            const to = { url: 'http://localhost:9001/accounts/peertube' };
            const by = { url: 'http://localhost:9002/accounts/peertube', privateKey: keys.privateKey };
            yield activitypub_2.makeFollowRequest(to, by);
        });
    });
    describe('When checking HTTP signature', function () {
        it('Should fail with an invalid digest', function () {
            return __awaiter(this, void 0, void 0, function* () {
                const body = activitypub_1.activityPubContextify(require('./json/peertube/announce-without-context.json'));
                const headers = {
                    Digest: activitypub_http_utils_1.buildDigest({ hello: 'coucou' })
                };
                const { response } = yield activitypub_2.makePOSTAPRequest(url, body, baseHttpSignature, headers);
                expect(response.statusCode).to.equal(403);
            });
        });
        it('Should fail with an invalid date', function () {
            return __awaiter(this, void 0, void 0, function* () {
                const body = activitypub_1.activityPubContextify(require('./json/peertube/announce-without-context.json'));
                const headers = activitypub_http_utils_1.buildGlobalHeaders(body);
                headers['date'] = 'Wed, 21 Oct 2015 07:28:00 GMT';
                const { response } = yield activitypub_2.makePOSTAPRequest(url, body, baseHttpSignature, headers);
                expect(response.statusCode).to.equal(403);
            });
        });
        it('Should fail with bad keys', function () {
            return __awaiter(this, void 0, void 0, function* () {
                yield setKeysOfServer2(1, invalidKeys.publicKey, invalidKeys.privateKey);
                yield setKeysOfServer2(2, invalidKeys.publicKey, invalidKeys.privateKey);
                const body = activitypub_1.activityPubContextify(require('./json/peertube/announce-without-context.json'));
                const headers = activitypub_http_utils_1.buildGlobalHeaders(body);
                const { response } = yield activitypub_2.makePOSTAPRequest(url, body, baseHttpSignature, headers);
                expect(response.statusCode).to.equal(403);
            });
        });
        it('Should succeed with a valid HTTP signature', function () {
            return __awaiter(this, void 0, void 0, function* () {
                yield setKeysOfServer2(1, keys.publicKey, keys.privateKey);
                yield setKeysOfServer2(2, keys.publicKey, keys.privateKey);
                const body = activitypub_1.activityPubContextify(require('./json/peertube/announce-without-context.json'));
                const headers = activitypub_http_utils_1.buildGlobalHeaders(body);
                const { response } = yield activitypub_2.makePOSTAPRequest(url, body, baseHttpSignature, headers);
                expect(response.statusCode).to.equal(204);
            });
        });
    });
    describe('When checking Linked Data Signature', function () {
        before(() => __awaiter(this, void 0, void 0, function* () {
            yield setKeysOfServer3(3, keys.publicKey, keys.privateKey);
            const to = { url: 'http://localhost:9001/accounts/peertube' };
            const by = { url: 'http://localhost:9003/accounts/peertube', privateKey: keys.privateKey };
            yield activitypub_2.makeFollowRequest(to, by);
        }));
        it('Should fail with bad keys', function () {
            return __awaiter(this, void 0, void 0, function* () {
                this.timeout(10000);
                yield setKeysOfServer3(1, invalidKeys.publicKey, invalidKeys.privateKey);
                yield setKeysOfServer3(3, invalidKeys.publicKey, invalidKeys.privateKey);
                const body = require('./json/peertube/announce-without-context.json');
                body.actor = 'http://localhost:9003/accounts/peertube';
                const signer = { privateKey: invalidKeys.privateKey, url: 'http://localhost:9003/accounts/peertube' };
                const signedBody = yield activitypub_1.buildSignedActivity(signer, body);
                const headers = activitypub_http_utils_1.buildGlobalHeaders(signedBody);
                const { response } = yield activitypub_2.makePOSTAPRequest(url, signedBody, baseHttpSignature, headers);
                expect(response.statusCode).to.equal(403);
            });
        });
        it('Should fail with an altered body', function () {
            return __awaiter(this, void 0, void 0, function* () {
                this.timeout(10000);
                yield setKeysOfServer3(1, keys.publicKey, keys.privateKey);
                yield setKeysOfServer3(3, keys.publicKey, keys.privateKey);
                const body = require('./json/peertube/announce-without-context.json');
                body.actor = 'http://localhost:9003/accounts/peertube';
                const signer = { privateKey: keys.privateKey, url: 'http://localhost:9003/accounts/peertube' };
                const signedBody = yield activitypub_1.buildSignedActivity(signer, body);
                signedBody.actor = 'http://localhost:9003/account/peertube';
                const headers = activitypub_http_utils_1.buildGlobalHeaders(signedBody);
                const { response } = yield activitypub_2.makePOSTAPRequest(url, signedBody, baseHttpSignature, headers);
                expect(response.statusCode).to.equal(403);
            });
        });
        it('Should succeed with a valid signature', function () {
            return __awaiter(this, void 0, void 0, function* () {
                this.timeout(10000);
                const body = require('./json/peertube/announce-without-context.json');
                body.actor = 'http://localhost:9003/accounts/peertube';
                const signer = { privateKey: keys.privateKey, url: 'http://localhost:9003/accounts/peertube' };
                const signedBody = yield activitypub_1.buildSignedActivity(signer, body);
                const headers = activitypub_http_utils_1.buildGlobalHeaders(signedBody);
                const { response } = yield activitypub_2.makePOSTAPRequest(url, signedBody, baseHttpSignature, headers);
                expect(response.statusCode).to.equal(204);
            });
        });
    });
    after(function () {
        return __awaiter(this, void 0, void 0, function* () {
            utils_1.killallServers(servers);
            if (this['ok']) {
                yield utils_1.flushTests();
            }
        });
    });
});
