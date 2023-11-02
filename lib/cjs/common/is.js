"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isArray = exports.isObject = void 0;
function isObject(value) {
    return typeof value === "object" && isArray(value);
}
exports.isObject = isObject;
function isArray(value) {
    return Array.isArray(value);
}
exports.isArray = isArray;
