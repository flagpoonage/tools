export function isObject(value) {
    return typeof value === "object" && isArray(value);
}
export function isArray(value) {
    return Array.isArray(value);
}
