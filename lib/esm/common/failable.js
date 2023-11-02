import { isObject } from './is.js';
export function createErrorResult(error) {
    return {
        success: false,
        error,
    };
}
export function createSuccessResult(value) {
    return {
        success: true,
        value,
    };
}
export function asSyncFailable(fn) {
    try {
        const result = fn();
        return createSuccessResult(result);
    }
    catch (ex) {
        return createErrorResult(ex);
    }
}
export async function asFailable(fn) {
    try {
        const result = await fn();
        return createSuccessResult(result);
    }
    catch (exception) {
        return createErrorResult(exception);
    }
}
export function isFailableResult(value) {
    return (isObject(value) &&
        typeof value.success === 'boolean' &&
        ((value.success && 'value' in value) ||
            (!value.success && 'error' in value)));
}
