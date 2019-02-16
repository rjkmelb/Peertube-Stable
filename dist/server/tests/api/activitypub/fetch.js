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
const chai = require("chai");
const sql_1 = require("../../utils/miscs/sql");
const jobs_1 = require("../../utils/server/jobs");
const expect = chai.expect;
describe('Test ActivityPub fetcher', function () {
    let servers;
    before(function () {
        return __awaiter(this, void 0, void 0, function* () {
            this.timeout(60000);
            servers = yield utils_1.flushAndRunMultipleServers(3);
            yield utils_1.setAccessTokensToServers(servers);
            const user = { username: 'user1', password: 'password' };
            for (const server of servers) {
                yield utils_1.createUser(server.url, server.accessToken, user.username, user.password);
            }
            const userAccessToken = yield utils_1.userLogin(servers[0], user);
            yield utils_1.uploadVideo(servers[0].url, servers[0].accessToken, { name: 'video root' });
            const res = yield utils_1.uploadVideo(servers[0].url, servers[0].accessToken, { name: 'bad video root' });
            const badVideoUUID = res.body.video.uuid;
            yield utils_1.uploadVideo(servers[0].url, userAccessToken, { name: 'video user' });
            yield sql_1.setActorField(1, 'http://localhost:9001/accounts/user1', 'url', 'http://localhost:9002/accounts/user1');
            yield sql_1.setVideoField(1, badVideoUUID, 'url', 'http://localhost:9003/videos/watch/' + badVideoUUID);
        });
    });
    it('Should add only the video with a valid actor URL', function () {
        return __awaiter(this, void 0, void 0, function* () {
            this.timeout(60000);
            yield utils_1.doubleFollow(servers[0], servers[1]);
            yield jobs_1.waitJobs(servers);
            {
                const res = yield utils_1.getVideosListSort(servers[0].url, 'createdAt');
                expect(res.body.total).to.equal(3);
                const data = res.body.data;
                expect(data[0].name).to.equal('video root');
                expect(data[1].name).to.equal('bad video root');
                expect(data[2].name).to.equal('video user');
            }
            {
                const res = yield utils_1.getVideosListSort(servers[1].url, 'createdAt');
                expect(res.body.total).to.equal(1);
                const data = res.body.data;
                expect(data[0].name).to.equal('video root');
            }
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
