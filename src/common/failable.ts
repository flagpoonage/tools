import { isObject } from './is.js';

export interface FailableSuccess<T> {
  success: true;
  value: T;
}

export interface FailableError<T = unknown> {
  success: false;
  error: T;
}

export type FailableResult<T, E = unknown> =
  | FailableSuccess<T>
  | FailableError<E>;
export type Failable<T, E = unknown> = Promise<FailableResult<T, E>>;

export function createErrorResult<E = unknown>(error: E): FailableError<E> {
  return {
    success: false,
    error,
  };
}

export function createSuccessResult<T = unknown>(value: T): FailableSuccess<T> {
  return {
    success: true,
    value,
  };
}

export function asSyncFailable<T = unknown>(fn: () => T): FailableResult<T> {
  try {
    const result = fn();
    return createSuccessResult(result);
  } catch (ex) {
    return createErrorResult(ex);
  }
}

export async function asFailable<T = unknown>(
  fn: () => T | Promise<T>,
): Failable<T> {
  try {
    const result = await fn();
    return createSuccessResult(result);
  } catch (exception) {
    return createErrorResult(exception);
  }
}

export function isFailableResult(
  value: unknown,
): value is FailableResult<unknown> {
  return (
    isObject(value) &&
    typeof value.success === 'boolean' &&
    ((value.success && 'value' in value) ||
      (!value.success && 'error' in value))
  );
}
