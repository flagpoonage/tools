"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRootDiv = exports.createRootElement = void 0;
const dom_shorthand_js_1 = require("./dom-shorthand.js");
function createRootElement(id, v) {
    const existing = (0, dom_shorthand_js_1.$id)(id);
    if (existing) {
        return existing;
    }
    const el = document.createElement(v);
    el.id = id;
    document.body.appendChild(el);
    return el;
}
exports.createRootElement = createRootElement;
function createRootDiv(id) {
    return createRootElement(id, 'div');
}
exports.createRootDiv = createRootDiv;
