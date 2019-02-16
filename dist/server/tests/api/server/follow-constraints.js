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
const index_1 = require("../../utils/index");
const follows_1 = require("../../utils/server/follows");
const login_1 = require("../../utils/users/login");
const users_1 = require("../../utils/users/users");
const expect = chai.expect;
describe('Test follow constraints', function () {
    let servers = [];
    let video1UUID;
    let video2UUID;
    let userAccessToken;
    before(function () {
        return __awaiter(this, void 0, void 0, function* () {
            this.timeout(30000);
            servers = yield index_1.flushAndRunMultipleServers(2);
            yield index_1.setAccessTokensToServers(servers);
            {
                const res = yield index_1.uploadVideo(servers[0].url, servers[0].accessToken, { name: 'video server 1' });
                video1UUID = res.body.video.uuid;
            }
            {
                const res = yield index_1.uploadVideo(servers[1].url, servers[1].accessToken, { name: 'video server 2' });
                video2UUID = res.body.video.uuid;
            }
            const user = {
                username: 'user1',
                password: 'super_password'
            };
            yield users_1.createUser(servers[0].url, servers[0].accessToken, user.username, user.password);
            userAccessToken = yield login_1.userLogin(servers[0], user);
            yield utils_1.doubleFollow(servers[0], servers[1]);
        });
    });
    describe('With a followed instance', function () {
        describe('With an unlogged user', function () {
            it('Should get the local video', function () {
                return __awaiter(this, void 0, void 0, function* () {
                    yield utils_1.getVideo(servers[0].url, video1UUID, 200);
                });
            });
            it('Should get the remote video', function () {
                return __awaiter(this, void 0, void 0, function* () {
                    yield utils_1.getVideo(servers[0].url, video2UUID, 200);
                });
            });
            it('Should list local account videos', function () {
                return __awaiter(this, void 0, void 0, function* () {
                    const res = yield utils_1.getAccountVideos(servers[0].url, undefined, 'root@localhost:9001', 0, 5);
                    expect(res.body.total).to.equal(1);
                    expect(res.body.data).to.have.lengthOf(1);
                });
            });
            it('Should list remote account videos', function () {
                return __awaiter(this, void 0, void 0, function* () {
                    const res = yield utils_1.getAccountVideos(servers[0].url, undefined, 'root@localhost:9002', 0, 5);
                    expect(res.body.total).to.equal(1);
                    expect(res.body.data).to.have.lengthOf(1);
                });
            });
            it('Should list local channel videos', function () {
                return __awaiter(this, void 0, void 0, function* () {
                    const res = yield utils_1.getVideoChannelVideos(servers[0].url, undefined, 'root_channel@localhost:9001', 0, 5);
                    expect(res.body.total).to.equal(1);
                    expect(res.body.data).to.have.lengthOf(1);
                });
            });
            it('Should list remote channel videos', function () {
                return __awaiter(this, void 0, void 0, function* () {
                    const res = yield utils_1.getVideoChannelVideos(servers[0].url, undefined, 'root_channel@localhost:9002', 0, 5);
                    expect(res.body.total).to.equal(1);
                    expect(res.body.data).to.have.lengthOf(1);
                });
            });
        });
        describe('With a logged user', function () {
            it('Should get the local video', function () {
                return __awaiter(this, void 0, void 0, function* () {
                    yield utils_1.getVideoWithToken(servers[0].url, userAccessToken, video1UUID, 200);
                });
            });
            it('Should get the remote video', function () {
                return __awaiter(this, void 0, void 0, function* () {
                    yield utils_1.getVideoWithToken(servers[0].url, userAccessToken, video2UUID, 200);
                });
            });
            it('Should list local account videos', function () {
                return __awaiter(this, void 0, void 0, function* () {
                    const res = yield utils_1.getAccountVideos(servers[0].url, userAccessToken, 'root@localhost:9001', 0, 5);
                    expect(res.body.total).to.equal(1);
                    expect(res.body.data).to.have.lengthOf(1);
                });
            });
            it('Should list remote account videos', function () {
                return __awaiter(this, void 0, void 0, function* () {
                    const res = yield utils_1.getAccountVideos(servers[0].url, userAccessToken, 'root@localhost:9002', 0, 5);
                    expect(res.body.total).to.equal(1);
                    expect(res.body.data).to.have.lengthOf(1);
                });
            });
            it('Should list local channel videos', function () {
                return __awaiter(this, void 0, void 0, function* () {
                    const res = yield utils_1.getVideoChannelVideos(servers[0].url, userAccessToken, 'root_channel@localhost:9001', 0, 5);
                    expect(res.body.total).to.equal(1);
                    expect(res.body.data).to.have.lengthOf(1);
                });
            });
            it('Should list remote channel videos', function () {
                return __awaiter(this, void 0, void 0, function* () {
                    const res = yield utils_1.getVideoChannelVideos(servers[0].url, userAccessToken, 'root_channel@localhost:9002', 0, 5);
                    expect(res.body.total).to.equal(1);
                    expect(res.body.data).to.have.lengthOf(1);
                });
            });
        });
    });
    describe('With a non followed instance', function () {
        before(function () {
            return __awaiter(this, void 0, void 0, function* () {
                this.timeout(30000);
                yield follows_1.unfollow(servers[0].url, servers[0].accessToken, servers[1]);
            });
        });
        describe('With an unlogged user', function () {
            it('Should get the local video', function () {
                return __awaiter(this, void 0, void 0, function* () {
                    yield utils_1.getVideo(servers[0].url, video1UUID, 200);
                });
            });
            it('Should not get the remote video', function () {
                return __awaiter(this, void 0, void 0, function* () {
                    yield utils_1.getVideo(servers[0].url, video2UUID, 403);
                });
            });
            it('Should list local account videos', function () {
                return __awaiter(this, void 0, void 0, function* () {
                    const res = yield utils_1.getAccountVideos(servers[0].url, undefined, 'root@localhost:9001', 0, 5);
                    expect(res.body.total).to.equal(1);
                    expect(res.body.data).to.have.lengthOf(1);
                });
            });
            it('Should not list remote account videos', function () {
                return __awaiter(this, void 0, void 0, function* () {
                    const res = yield utils_1.getAccountVideos(servers[0].url, undefined, 'root@localhost:9002', 0, 5);
                    expect(res.body.total).to.equal(0);
                    expect(res.body.data).to.have.lengthOf(0);
                });
            });
            it('Should list local channel videos', function () {
                return __awaiter(this, void 0, void 0, function* () {
                    const res = yield utils_1.getVideoChannelVideos(servers[0].url, undefined, 'root_channel@localhost:9001', 0, 5);
                    expect(res.body.total).to.equal(1);
                    expect(res.body.data).to.have.lengthOf(1);
                });
            });
            it('Should not list remote channel videos', function () {
                return __awaiter(this, void 0, void 0, function* () {
                    const res = yield utils_1.getVideoChannelVideos(servers[0].url, undefined, 'root_channel@localhost:9002', 0, 5);
                    expect(res.body.total).to.equal(0);
                    expect(res.body.data).to.have.lengthOf(0);
                });
            });
        });
        describe('With a logged user', function () {
            it('Should get the local video', function () {
                return __awaiter(this, void 0, void 0, function* () {
                    yield utils_1.getVideoWithToken(servers[0].url, userAccessToken, video1UUID, 200);
                });
            });
            it('Should get the remote video', function () {
                return __awaiter(this, void 0, void 0, function* () {
                    yield utils_1.getVideoWithToken(servers[0].url, userAccessToken, video2UUID, 200);
                });
            });
            it('Should list local account videos', function () {
                return __awaiter(this, void 0, void 0, function* () {
                    const res = yield utils_1.getAccountVideos(servers[0].url, userAccessToken, 'root@localhost:9001', 0, 5);
                    expect(res.body.total).to.equal(1);
                    expect(res.body.data).to.have.lengthOf(1);
                });
            });
            it('Should list remote account videos', function () {
                return __awaiter(this, void 0, void 0, function* () {
                    const res = yield utils_1.getAccountVideos(servers[0].url, userAccessToken, 'root@localhost:9002', 0, 5);
                    expect(res.body.total).to.equal(1);
                    expect(res.body.data).to.have.lengthOf(1);
                });
            });
            it('Should list local channel videos', function () {
                return __awaiter(this, void 0, void 0, function* () {
                    const res = yield utils_1.getVideoChannelVideos(servers[0].url, userAccessToken, 'root_channel@localhost:9001', 0, 5);
                    expect(res.body.total).to.equal(1);
                    expect(res.body.data).to.have.lengthOf(1);
                });
            });
            it('Should list remote channel videos', function () {
                return __awaiter(this, void 0, void 0, function* () {
                    const res = yield utils_1.getVideoChannelVideos(servers[0].url, userAccessToken, 'root_channel@localhost:9002', 0, 5);
                    expect(res.body.total).to.equal(1);
                    expect(res.body.data).to.have.lengthOf(1);
                });
            });
        });
    });
    after(function () {
        return __awaiter(this, void 0, void 0, function* () {
            index_1.killallServers(servers);
        });
    });
});
