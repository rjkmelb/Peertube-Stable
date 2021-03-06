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
const core_utils_1 = require("../../helpers/core-utils");
const logger_1 = require("../../helpers/logger");
const actor_follow_1 = require("../../models/activitypub/actor-follow");
const abstract_scheduler_1 = require("./abstract-scheduler");
const initializers_1 = require("../../initializers");
class BadActorFollowScheduler extends abstract_scheduler_1.AbstractScheduler {
    constructor() {
        super();
        this.schedulerIntervalMs = initializers_1.SCHEDULER_INTERVALS_MS.badActorFollow;
    }
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!core_utils_1.isTestInstance())
                logger_1.logger.info('Removing bad actor follows (scheduler).');
            try {
                yield actor_follow_1.ActorFollowModel.removeBadActorFollows();
            }
            catch (err) {
                logger_1.logger.error('Error in bad actor follows scheduler.', { err });
            }
        });
    }
    static get Instance() {
        return this.instance || (this.instance = new this());
    }
}
exports.BadActorFollowScheduler = BadActorFollowScheduler;
