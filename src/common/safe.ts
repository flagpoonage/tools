import { FailableResult, asSyncFailable } from "./failable";

export function safeParseJson(value: string): FailableResult<unknown> {
  return asSyncFailable(() => JSON.parse(value));
}

export function safeParseURL(value: string): FailableResult<URL> {
  return asSyncFailable(() => new URL(value));
}
