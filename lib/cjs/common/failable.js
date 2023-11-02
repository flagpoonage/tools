"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isFailableResult = exports.asFailable = exports.asSyncFailable = exports.createSuccessResult = exports.createErrorResult = void 0;
const is_js_1 = require("./is.js");
function createErrorResult(error) {
    return {
        success: false,
        error,
    };
}
exports.createErrorResult = createErrorResult;
function createSuccessResult(value) {
    return {
        success: true,
        value,
    };
}
exports.createSuccessResult = createSuccessResult;
function asSyncFailable(fn) {
    try {
        const result = fn();
        return createSuccessResult(result);
    }
    catch (ex) {
        return createErrorResult(ex);
    }
}
exports.asSyncFailable = asSyncFailable;
async function asFailable(fn) {
    try {
        const result = await fn();
        return createSuccessResult(result);
    }
    catch (exception) {
        return createErrorResult(exception);
    }
}
exports.asFailable = asFailable;
function isFailableResult(value) {
    return ((0, is_js_1.isObject)(value) &&
        typeof value.success === 'boolean' &&
        ((value.success && 'value' in value) ||
            (!value.success && 'error' in value)));
}
exports.isFailableResult = isFailableResult;
