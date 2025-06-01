import { Result, createResult } from './result';

export function safeParseJson(value: string): Result<unknown> {
  return createResult(() => JSON.parse(value));
}

export function safeParseURL(value: string): Result<URL> {
  return createResult(() => new URL(value));
}
