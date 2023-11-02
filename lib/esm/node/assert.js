export function assertOrExit(condition, emsg, ...args) {
    if (!condition) {
        return exitMessage(emsg, ...args);
    }
}
export function exitMessage(msg, ...args) {
    console.error(msg, ...args);
    return process.exit(1);
}
