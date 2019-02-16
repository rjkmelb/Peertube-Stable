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
const requests_1 = require("../../../helpers/requests");
const initializers_1 = require("../../../initializers");
const activitypub_http_utils_1 = require("../../../lib/job-queue/handlers/utils/activitypub-http-utils");
const activitypub_1 = require("../../../helpers/activitypub");
function makePOSTAPRequest(url, body, httpSignature, headers) {
    const options = {
        method: 'POST',
        uri: url,
        json: body,
        httpSignature,
        headers
    };
    return requests_1.doRequest(options);
}
exports.makePOSTAPRequest = makePOSTAPRequest;
function makeFollowRequest(to, by) {
    return __awaiter(this, void 0, void 0, function* () {
        const follow = {
            type: 'Follow',
            id: by.url + '/toto',
            actor: by.url,
            object: to.url
        };
        const body = activitypub_1.activityPubContextify(follow);
        const httpSignature = {
            algorithm: initializers_1.HTTP_SIGNATURE.ALGORITHM,
            authorizationHeaderName: initializers_1.HTTP_SIGNATURE.HEADER_NAME,
            keyId: by.url,
            key: by.privateKey,
            headers: initializers_1.HTTP_SIGNATURE.HEADERS_TO_SIGN
        };
        const headers = activitypub_http_utils_1.buildGlobalHeaders(body);
        return makePOSTAPRequest(to.url, body, httpSignature, headers);
    });
}
exports.makeFollowRequest = makeFollowRequest;
