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
const Bluebird = require("bluebird");
const fs_extra_1 = require("fs-extra");
const request = require("request");
const initializers_1 = require("../initializers");
const image_utils_1 = require("./image-utils");
function doRequest(requestOptions) {
    if (requestOptions.activityPub === true) {
        if (!Array.isArray(requestOptions.headers))
            requestOptions.headers = {};
        requestOptions.headers['accept'] = initializers_1.ACTIVITY_PUB.ACCEPT_HEADER;
    }
    return new Bluebird((res, rej) => {
        request(requestOptions, (err, response, body) => err ? rej(err) : res({ response, body }));
    });
}
exports.doRequest = doRequest;
function doRequestAndSaveToFile(requestOptions, destPath) {
    return new Bluebird((res, rej) => {
        const file = fs_extra_1.createWriteStream(destPath);
        file.on('finish', () => res());
        request(requestOptions)
            .on('error', err => rej(err))
            .pipe(file);
    });
}
exports.doRequestAndSaveToFile = doRequestAndSaveToFile;
function downloadImage(url, destPath, size) {
    return __awaiter(this, void 0, void 0, function* () {
        const tmpPath = destPath + '.tmp';
        yield doRequestAndSaveToFile({ method: 'GET', uri: url }, tmpPath);
        yield image_utils_1.processImage({ path: tmpPath }, destPath, size);
    });
}
exports.downloadImage = downloadImage;
