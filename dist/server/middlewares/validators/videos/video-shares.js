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
require("express-validator");
const check_1 = require("express-validator/check");
const misc_1 = require("../../../helpers/custom-validators/misc");
const videos_1 = require("../../../helpers/custom-validators/videos");
const logger_1 = require("../../../helpers/logger");
const video_share_1 = require("../../../models/video/video-share");
const utils_1 = require("../utils");
const videosShareValidator = [
    check_1.param('id').custom(misc_1.isIdOrUUIDValid).not().isEmpty().withMessage('Should have a valid id'),
    check_1.param('actorId').custom(misc_1.isIdValid).not().isEmpty().withMessage('Should have a valid actor id'),
    (req, res, next) => __awaiter(this, void 0, void 0, function* () {
        logger_1.logger.debug('Checking videoShare parameters', { parameters: req.params });
        if (utils_1.areValidationErrors(req, res))
            return;
        if (!(yield videos_1.isVideoExist(req.params.id, res)))
            return;
        const video = res.locals.video;
        const share = yield video_share_1.VideoShareModel.load(req.params.actorId, video.id);
        if (!share) {
            return res.status(404)
                .end();
        }
        res.locals.videoShare = share;
        return next();
    })
];
exports.videosShareValidator = videosShareValidator;
