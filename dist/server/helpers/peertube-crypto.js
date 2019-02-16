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
const initializers_1 = require("../initializers");
const core_utils_1 = require("./core-utils");
const custom_jsonld_signature_1 = require("./custom-jsonld-signature");
const logger_1 = require("./logger");
const lodash_1 = require("lodash");
const crypto_1 = require("crypto");
const activitypub_http_utils_1 = require("../lib/job-queue/handlers/utils/activitypub-http-utils");
const httpSignature = require('http-signature');
function createPrivateAndPublicKeys() {
    return __awaiter(this, void 0, void 0, function* () {
        logger_1.logger.info('Generating a RSA key...');
        const { key } = yield core_utils_1.createPrivateKey(initializers_1.PRIVATE_RSA_KEY_SIZE);
        const { publicKey } = yield core_utils_1.getPublicKey(key);
        return { privateKey: key, publicKey };
    });
}
exports.createPrivateAndPublicKeys = createPrivateAndPublicKeys;
function comparePassword(plainPassword, hashPassword) {
    return core_utils_1.bcryptComparePromise(plainPassword, hashPassword);
}
exports.comparePassword = comparePassword;
function cryptPassword(password) {
    return __awaiter(this, void 0, void 0, function* () {
        const salt = yield core_utils_1.bcryptGenSaltPromise(initializers_1.BCRYPT_SALT_SIZE);
        return core_utils_1.bcryptHashPromise(password, salt);
    });
}
exports.cryptPassword = cryptPassword;
function isHTTPSignatureDigestValid(rawBody, req) {
    if (req.headers[initializers_1.HTTP_SIGNATURE.HEADER_NAME] && req.headers['digest']) {
        return activitypub_http_utils_1.buildDigest(rawBody.toString()) === req.headers['digest'];
    }
    return true;
}
exports.isHTTPSignatureDigestValid = isHTTPSignatureDigestValid;
function isHTTPSignatureVerified(httpSignatureParsed, actor) {
    return httpSignature.verifySignature(httpSignatureParsed, actor.publicKey) === true;
}
exports.isHTTPSignatureVerified = isHTTPSignatureVerified;
function parseHTTPSignature(req, clockSkew) {
    return httpSignature.parse(req, { authorizationHeaderName: initializers_1.HTTP_SIGNATURE.HEADER_NAME, clockSkew });
}
exports.parseHTTPSignature = parseHTTPSignature;
function isJsonLDSignatureVerified(fromActor, signedDocument) {
    return __awaiter(this, void 0, void 0, function* () {
        if (signedDocument.signature.type === 'RsaSignature2017') {
            const res = yield isJsonLDRSA2017Verified(fromActor, signedDocument);
            if (res === true)
                return true;
        }
        const publicKeyObject = {
            '@context': custom_jsonld_signature_1.jsig.SECURITY_CONTEXT_URL,
            id: fromActor.url,
            type: 'CryptographicKey',
            owner: fromActor.url,
            publicKeyPem: fromActor.publicKey
        };
        const publicKeyOwnerObject = {
            '@context': custom_jsonld_signature_1.jsig.SECURITY_CONTEXT_URL,
            id: fromActor.url,
            publicKey: [publicKeyObject]
        };
        const options = {
            publicKey: publicKeyObject,
            publicKeyOwner: publicKeyOwnerObject
        };
        return custom_jsonld_signature_1.jsig.promises
            .verify(signedDocument, options)
            .then((result) => result.verified)
            .catch(err => {
            logger_1.logger.error('Cannot check signature.', { err });
            return false;
        });
    });
}
exports.isJsonLDSignatureVerified = isJsonLDSignatureVerified;
function isJsonLDRSA2017Verified(fromActor, signedDocument) {
    return __awaiter(this, void 0, void 0, function* () {
        function hash(obj) {
            return custom_jsonld_signature_1.jsonld.promises
                .normalize(obj, {
                algorithm: 'URDNA2015',
                format: 'application/n-quads'
            })
                .then(res => core_utils_1.sha256(res));
        }
        const signatureCopy = lodash_1.cloneDeep(signedDocument.signature);
        Object.assign(signatureCopy, {
            '@context': [
                'https://w3id.org/security/v1',
                { RsaSignature2017: 'https://w3id.org/security#RsaSignature2017' }
            ]
        });
        delete signatureCopy.type;
        delete signatureCopy.id;
        delete signatureCopy.signatureValue;
        const docWithoutSignature = lodash_1.cloneDeep(signedDocument);
        delete docWithoutSignature.signature;
        const [documentHash, optionsHash] = yield Promise.all([
            hash(docWithoutSignature),
            hash(signatureCopy)
        ]);
        const toVerify = optionsHash + documentHash;
        const verify = crypto_1.createVerify('RSA-SHA256');
        verify.update(toVerify, 'utf8');
        return verify.verify(fromActor.publicKey, signedDocument.signature.signatureValue, 'base64');
    });
}
function signJsonLDObject(byActor, data) {
    const options = {
        privateKeyPem: byActor.privateKey,
        creator: byActor.url,
        algorithm: 'RsaSignature2017'
    };
    return custom_jsonld_signature_1.jsig.promises.sign(data, options);
}
exports.signJsonLDObject = signJsonLDObject;
