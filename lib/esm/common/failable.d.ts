export interface FailableSuccess<T> {
    success: true;
    value: T;
}
export interface FailableError<T = unknown> {
    success: false;
    error: T;
}
export type FailableResult<T, E = unknown> = FailableSuccess<T> | FailableError<E>;
export type Failable<T, E = unknown> = Promise<FailableResult<T, E>>;
export declare function createErrorResult<E = unknown>(error: E): FailableError<E>;
export declare function createSuccessResult<T = unknown>(value: T): FailableSuccess<T>;
export declare function asSyncFailable<T = unknown>(fn: () => T): FailableResult<T>;
export declare function asFailable<T = unknown>(fn: () => T | Promise<T>): Failable<T>;
export declare function isFailableResult(value: unknown): value is FailableResult<unknown>;
