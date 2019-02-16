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
const chai = require("chai");
require("mocha");
const utils_1 = require("../../utils");
const expect = chai.expect;
describe('Test activitypub', function () {
    let servers = [];
    let videoUUID;
    before(function () {
        return __awaiter(this, void 0, void 0, function* () {
            this.timeout(30000);
            yield utils_1.flushTests();
            servers = yield utils_1.flushAndRunMultipleServers(2);
            yield utils_1.setAccessTokensToServers(servers);
            {
                const res = yield utils_1.uploadVideo(servers[0].url, servers[0].accessToken, { name: 'video' });
                videoUUID = res.body.video.uuid;
            }
            yield utils_1.doubleFollow(servers[0], servers[1]);
        });
    });
    it('Should return the account object', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield utils_1.makeActivityPubGetRequest(servers[0].url, '/accounts/root');
            const object = res.body;
            expect(object.type).to.equal('Person');
            expect(object.id).to.equal('http://localhost:9001/accounts/root');
            expect(object.name).to.equal('root');
            expect(object.preferredUsername).to.equal('root');
        });
    });
    it('Should return the video object', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield utils_1.makeActivityPubGetRequest(servers[0].url, '/videos/watch/' + videoUUID);
            const object = res.body;
            expect(object.type).to.equal('Video');
            expect(object.id).to.equal('http://localhost:9001/videos/watch/' + videoUUID);
            expect(object.name).to.equal('video');
        });
    });
    it('Should redirect to the origin video object', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield utils_1.makeActivityPubGetRequest(servers[1].url, '/videos/watch/' + videoUUID, 302);
            expect(res.header.location).to.equal('http://localhost:9001/videos/watch/' + videoUUID);
        });
    });
    after(function () {
        return __awaiter(this, void 0, void 0, function* () {
            utils_1.killallServers(servers);
        });
    });
});
