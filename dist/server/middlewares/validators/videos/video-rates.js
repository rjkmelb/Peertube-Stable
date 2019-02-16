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
const utils_1 = require("../utils");
const account_video_rate_1 = require("../../../models/account/account-video-rate");
const accounts_1 = require("../../../helpers/custom-validators/accounts");
const videoUpdateRateValidator = [
    check_1.param('id').custom(misc_1.isIdOrUUIDValid).not().isEmpty().withMessage('Should have a valid id'),
    check_1.body('rating').custom(videos_1.isVideoRatingTypeValid).withMessage('Should have a valid rate type'),
    (req, res, next) => __awaiter(this, void 0, void 0, function* () {
        logger_1.logger.debug('Checking videoRate parameters', { parameters: req.body });
        if (utils_1.areValidationErrors(req, res))
            return;
        if (!(yield videos_1.isVideoExist(req.params.id, res)))
            return;
        return next();
    })
];
exports.videoUpdateRateValidator = videoUpdateRateValidator;
const getAccountVideoRateValidator = function (rateType) {
    return [
        check_1.param('name').custom(accounts_1.isAccountNameValid).withMessage('Should have a valid account name'),
        check_1.param('videoId').custom(misc_1.isIdOrUUIDValid).not().isEmpty().withMessage('Should have a valid videoId'),
        (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            logger_1.logger.debug('Checking videoCommentGetValidator parameters.', { parameters: req.params });
            if (utils_1.areValidationErrors(req, res))
                return;
            const rate = yield account_video_rate_1.AccountVideoRateModel.loadLocalAndPopulateVideo(rateType, req.params.name, req.params.videoId);
            if (!rate) {
                return res.status(404)
                    .json({ error: 'Video rate not found' })
                    .end();
            }
            res.locals.accountVideoRate = rate;
            return next();
        })
    ];
};
exports.getAccountVideoRateValidator = getAccountVideoRateValidator;
