"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.safeParseURL = exports.safeParseJson = void 0;
const failable_1 = require("./failable");
function safeParseJson(value) {
    return (0, failable_1.asSyncFailable)(() => JSON.parse(value));
}
exports.safeParseJson = safeParseJson;
function safeParseURL(value) {
    return (0, failable_1.asSyncFailable)(() => new URL(value));
}
exports.safeParseURL = safeParseURL;
