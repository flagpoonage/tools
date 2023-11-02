"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.safeReadJsonFile = exports.safeReadFile = void 0;
const promises_1 = require("fs/promises");
const index_js_1 = require("../common/index.js");
async function safeReadFile(path) {
    return (0, index_js_1.asFailable)(() => (0, promises_1.readFile)(path, 'utf-8'));
}
exports.safeReadFile = safeReadFile;
async function safeReadJsonFile(path) {
    const file = await safeReadFile(path);
    if (!file.success) {
        return file;
    }
    return (0, index_js_1.safeParseJson)(file.value);
}
exports.safeReadJsonFile = safeReadJsonFile;
