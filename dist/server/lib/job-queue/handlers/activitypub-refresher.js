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
const logger_1 = require("../../../helpers/logger");
const video_1 = require("../../../helpers/video");
const activitypub_1 = require("../../activitypub");
function refreshAPObject(job) {
    return __awaiter(this, void 0, void 0, function* () {
        const payload = job.data;
        logger_1.logger.info('Processing AP refresher in job %d.', job.id);
        if (payload.type === 'video')
            return refreshAPVideo(payload.videoUrl);
    });
}
exports.refreshAPObject = refreshAPObject;
function refreshAPVideo(videoUrl) {
    return __awaiter(this, void 0, void 0, function* () {
        const fetchType = 'all';
        const syncParam = { likes: true, dislikes: true, shares: true, comments: true, thumbnail: true };
        const videoFromDatabase = yield video_1.fetchVideoByUrl(videoUrl, fetchType);
        if (videoFromDatabase) {
            const refreshOptions = {
                video: videoFromDatabase,
                fetchedType: fetchType,
                syncParam
            };
            yield activitypub_1.refreshVideoIfNeeded(refreshOptions);
        }
    });
}
