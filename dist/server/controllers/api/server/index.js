"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const follows_1 = require("./follows");
const stats_1 = require("./stats");
const redundancy_1 = require("./redundancy");
const server_blocklist_1 = require("./server-blocklist");
const serverRouter = express.Router();
exports.serverRouter = serverRouter;
serverRouter.use('/', follows_1.serverFollowsRouter);
serverRouter.use('/', redundancy_1.serverRedundancyRouter);
serverRouter.use('/', stats_1.statsRouter);
serverRouter.use('/', server_blocklist_1.serverBlocklistRouter);
