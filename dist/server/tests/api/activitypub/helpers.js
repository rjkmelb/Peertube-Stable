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
const chai_1 = require("chai");
const utils_1 = require("../../utils");
const peertube_crypto_1 = require("../../../helpers/peertube-crypto");
const lodash_1 = require("lodash");
const activitypub_1 = require("../../../helpers/activitypub");
describe('Test activity pub helpers', function () {
    describe('When checking the Linked Signature', function () {
        it('Should fail with an invalid Mastodon signature', function () {
            return __awaiter(this, void 0, void 0, function* () {
                const body = require('./json/mastodon/create-bad-signature.json');
                const publicKey = require('./json/mastodon/public-key.json').publicKey;
                const fromActor = { publicKey, url: 'http://localhost:9002/accounts/peertube' };
                const result = yield peertube_crypto_1.isJsonLDSignatureVerified(fromActor, body);
                chai_1.expect(result).to.be.false;
            });
        });
        it('Should fail with an invalid public key', function () {
            return __awaiter(this, void 0, void 0, function* () {
                const body = require('./json/mastodon/create.json');
                const publicKey = require('./json/mastodon/bad-public-key.json').publicKey;
                const fromActor = { publicKey, url: 'http://localhost:9002/accounts/peertube' };
                const result = yield peertube_crypto_1.isJsonLDSignatureVerified(fromActor, body);
                chai_1.expect(result).to.be.false;
            });
        });
        it('Should succeed with a valid Mastodon signature', function () {
            return __awaiter(this, void 0, void 0, function* () {
                const body = require('./json/mastodon/create.json');
                const publicKey = require('./json/mastodon/public-key.json').publicKey;
                const fromActor = { publicKey, url: 'http://localhost:9002/accounts/peertube' };
                const result = yield peertube_crypto_1.isJsonLDSignatureVerified(fromActor, body);
                chai_1.expect(result).to.be.true;
            });
        });
        it('Should fail with an invalid PeerTube signature', function () {
            return __awaiter(this, void 0, void 0, function* () {
                const keys = require('./json/peertube/invalid-keys.json');
                const body = require('./json/peertube/announce-without-context.json');
                const actorSignature = { url: 'http://localhost:9002/accounts/peertube', privateKey: keys.privateKey };
                const signedBody = yield activitypub_1.buildSignedActivity(actorSignature, body);
                const fromActor = { publicKey: keys.publicKey, url: 'http://localhost:9002/accounts/peertube' };
                const result = yield peertube_crypto_1.isJsonLDSignatureVerified(fromActor, signedBody);
                chai_1.expect(result).to.be.false;
            });
        });
        it('Should fail with an invalid PeerTube URL', function () {
            return __awaiter(this, void 0, void 0, function* () {
                const keys = require('./json/peertube/keys.json');
                const body = require('./json/peertube/announce-without-context.json');
                const actorSignature = { url: 'http://localhost:9002/accounts/peertube', privateKey: keys.privateKey };
                const signedBody = yield activitypub_1.buildSignedActivity(actorSignature, body);
                const fromActor = { publicKey: keys.publicKey, url: 'http://localhost:9003/accounts/peertube' };
                const result = yield peertube_crypto_1.isJsonLDSignatureVerified(fromActor, signedBody);
                chai_1.expect(result).to.be.false;
            });
        });
        it('Should succeed with a valid PeerTube signature', function () {
            return __awaiter(this, void 0, void 0, function* () {
                const keys = require('./json/peertube/keys.json');
                const body = require('./json/peertube/announce-without-context.json');
                const actorSignature = { url: 'http://localhost:9002/accounts/peertube', privateKey: keys.privateKey };
                const signedBody = yield activitypub_1.buildSignedActivity(actorSignature, body);
                const fromActor = { publicKey: keys.publicKey, url: 'http://localhost:9002/accounts/peertube' };
                const result = yield peertube_crypto_1.isJsonLDSignatureVerified(fromActor, signedBody);
                chai_1.expect(result).to.be.true;
            });
        });
    });
    describe('When checking HTTP signature', function () {
        it('Should fail with an invalid http signature', function () {
            return __awaiter(this, void 0, void 0, function* () {
                const req = utils_1.buildRequestStub();
                req.method = 'POST';
                req.url = '/accounts/ronan/inbox';
                const mastodonObject = lodash_1.cloneDeep(require('./json/mastodon/bad-http-signature.json'));
                req.body = mastodonObject.body;
                req.headers = mastodonObject.headers;
                req.headers.signature = 'Signature ' + req.headers.signature;
                const parsed = peertube_crypto_1.parseHTTPSignature(req, 3600 * 365 * 3);
                const publicKey = require('./json/mastodon/public-key.json').publicKey;
                const actor = { publicKey };
                const verified = peertube_crypto_1.isHTTPSignatureVerified(parsed, actor);
                chai_1.expect(verified).to.be.false;
            });
        });
        it('Should fail with an invalid public key', function () {
            return __awaiter(this, void 0, void 0, function* () {
                const req = utils_1.buildRequestStub();
                req.method = 'POST';
                req.url = '/accounts/ronan/inbox';
                const mastodonObject = lodash_1.cloneDeep(require('./json/mastodon/http-signature.json'));
                req.body = mastodonObject.body;
                req.headers = mastodonObject.headers;
                req.headers.signature = 'Signature ' + req.headers.signature;
                const parsed = peertube_crypto_1.parseHTTPSignature(req, 3600 * 365 * 3);
                const publicKey = require('./json/mastodon/bad-public-key.json').publicKey;
                const actor = { publicKey };
                const verified = peertube_crypto_1.isHTTPSignatureVerified(parsed, actor);
                chai_1.expect(verified).to.be.false;
            });
        });
        it('Should fail because of clock skew', function () {
            return __awaiter(this, void 0, void 0, function* () {
                const req = utils_1.buildRequestStub();
                req.method = 'POST';
                req.url = '/accounts/ronan/inbox';
                const mastodonObject = lodash_1.cloneDeep(require('./json/mastodon/http-signature.json'));
                req.body = mastodonObject.body;
                req.headers = mastodonObject.headers;
                req.headers.signature = 'Signature ' + req.headers.signature;
                let errored = false;
                try {
                    peertube_crypto_1.parseHTTPSignature(req);
                }
                catch (_a) {
                    errored = true;
                }
                chai_1.expect(errored).to.be.true;
            });
        });
        it('Should fail without scheme', function () {
            return __awaiter(this, void 0, void 0, function* () {
                const req = utils_1.buildRequestStub();
                req.method = 'POST';
                req.url = '/accounts/ronan/inbox';
                const mastodonObject = lodash_1.cloneDeep(require('./json/mastodon/http-signature.json'));
                req.body = mastodonObject.body;
                req.headers = mastodonObject.headers;
                let errored = false;
                try {
                    peertube_crypto_1.parseHTTPSignature(req, 3600 * 365 * 3);
                }
                catch (_a) {
                    errored = true;
                }
                chai_1.expect(errored).to.be.true;
            });
        });
        it('Should succeed with a valid signature', function () {
            return __awaiter(this, void 0, void 0, function* () {
                const req = utils_1.buildRequestStub();
                req.method = 'POST';
                req.url = '/accounts/ronan/inbox';
                const mastodonObject = lodash_1.cloneDeep(require('./json/mastodon/http-signature.json'));
                req.body = mastodonObject.body;
                req.headers = mastodonObject.headers;
                req.headers.signature = 'Signature ' + req.headers.signature;
                const parsed = peertube_crypto_1.parseHTTPSignature(req, 3600 * 365 * 3);
                const publicKey = require('./json/mastodon/public-key.json').publicKey;
                const actor = { publicKey };
                const verified = peertube_crypto_1.isHTTPSignatureVerified(parsed, actor);
                chai_1.expect(verified).to.be.true;
            });
        });
    });
});
