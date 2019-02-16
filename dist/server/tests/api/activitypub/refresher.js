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
const index_1 = require("../../utils/index");
const jobs_1 = require("../../utils/server/jobs");
const sql_1 = require("../../utils/miscs/sql");
describe('Test AP refresher', function () {
    let servers = [];
    let videoUUID1;
    let videoUUID2;
    let videoUUID3;
    before(function () {
        return __awaiter(this, void 0, void 0, function* () {
            this.timeout(30000);
            servers = yield index_1.flushAndRunMultipleServers(2);
            yield index_1.setAccessTokensToServers(servers);
            {
                const res = yield index_1.uploadVideo(servers[1].url, servers[1].accessToken, { name: 'video1' });
                videoUUID1 = res.body.video.uuid;
            }
            {
                const res = yield index_1.uploadVideo(servers[1].url, servers[1].accessToken, { name: 'video2' });
                videoUUID2 = res.body.video.uuid;
            }
            {
                const res = yield index_1.uploadVideo(servers[1].url, servers[1].accessToken, { name: 'video3' });
                videoUUID3 = res.body.video.uuid;
            }
            yield utils_1.doubleFollow(servers[0], servers[1]);
        });
    });
    it('Should remove a deleted remote video', function () {
        return __awaiter(this, void 0, void 0, function* () {
            this.timeout(60000);
            yield index_1.wait(10000);
            yield sql_1.setVideoField(2, videoUUID1, 'uuid', '304afe4f-39f9-4d49-8ed7-ac57b86b174f');
            yield utils_1.getVideo(servers[0].url, videoUUID1);
            yield utils_1.getVideo(servers[0].url, videoUUID2);
            yield jobs_1.waitJobs(servers);
            yield utils_1.getVideo(servers[0].url, videoUUID1, 404);
            yield utils_1.getVideo(servers[0].url, videoUUID2, 200);
        });
    });
    it('Should not update a remote video if the remote instance is down', function () {
        return __awaiter(this, void 0, void 0, function* () {
            this.timeout(60000);
            index_1.killallServers([servers[1]]);
            yield sql_1.setVideoField(2, videoUUID3, 'uuid', '304afe4f-39f9-4d49-8ed7-ac57b86b174e');
            yield index_1.wait(10000);
            yield utils_1.getVideo(servers[0].url, videoUUID3);
            yield jobs_1.waitJobs([servers[0]]);
            yield utils_1.reRunServer(servers[1]);
            yield utils_1.getVideo(servers[0].url, videoUUID3);
            yield jobs_1.waitJobs(servers);
            yield utils_1.getVideo(servers[0].url, videoUUID3, 200);
        });
    });
    after(function () {
        return __awaiter(this, void 0, void 0, function* () {
            index_1.killallServers(servers);
        });
    });
});
