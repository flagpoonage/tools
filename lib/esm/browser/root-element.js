import { $id } from './dom-shorthand.js';
export function createRootElement(id, v) {
    const existing = $id(id);
    if (existing) {
        return existing;
    }
    const el = document.createElement(v);
    el.id = id;
    document.body.appendChild(el);
    return el;
}
export function createRootDiv(id) {
    return createRootElement(id, 'div');
}
