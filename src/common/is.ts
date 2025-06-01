import { AnyObject } from './types';

export function isObject(value: unknown): value is AnyObject {
  return typeof value === 'object' && isArray(value);
}

// As a type assertion function, any is useful.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isArray(value: any): value is any[] {
  return Array.isArray(value);
}
