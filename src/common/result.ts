import { isObject } from './is.js';

export interface ResultSuccess<T> {
  success: true;
  value: T;
}

export interface ResultError<T = unknown> {
  success: false;
  error: T;
}

export type Result<T, E = unknown> = ResultSuccess<T> | ResultError<E>;
export type ResultPromise<T, E = unknown> = Promise<Result<T, E>>;

export function createErrorResult<E = unknown>(error: E): ResultError<E> {
  return {
    success: false,
    error,
  };
}

export function createSuccessResult<T = unknown>(value: T): ResultSuccess<T> {
  return {
    success: true,
    value,
  };
}

export function createResult<T = unknown>(fn: () => T): Result<T> {
  try {
    const result = fn();
    return createSuccessResult(result);
  } catch (ex) {
    return createErrorResult(ex);
  }
}

export async function createResultAsync<T = unknown>(
  fn: () => T | Promise<T>,
): ResultPromise<T> {
  try {
    const result = await fn();
    return createSuccessResult(result);
  } catch (exception) {
    return createErrorResult(exception);
  }
}

export function isResultType(value: unknown): value is Result<unknown> {
  return (
    isObject(value) &&
    typeof value.success === 'boolean' &&
    ((value.success && 'value' in value) ||
      (!value.success && 'error' in value))
  );
}
