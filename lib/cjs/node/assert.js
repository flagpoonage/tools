"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exitMessage = exports.assertOrExit = void 0;
function assertOrExit(condition, emsg, ...args) {
    if (!condition) {
        return exitMessage(emsg, ...args);
    }
}
exports.assertOrExit = assertOrExit;
function exitMessage(msg, ...args) {
    console.error(msg, ...args);
    return process.exit(1);
}
exports.exitMessage = exitMessage;
