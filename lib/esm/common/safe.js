import { asSyncFailable } from "./failable";
export function safeParseJson(value) {
    return asSyncFailable(() => JSON.parse(value));
}
export function safeParseURL(value) {
    return asSyncFailable(() => new URL(value));
}
