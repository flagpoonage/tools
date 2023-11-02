import { AnyObject } from "./types";

export function isObject(value: unknown): value is AnyObject {
  return typeof value === "object" && isArray(value);
}

export function isArray(value: unknown): value is unknown[] {
  return Array.isArray(value);
}
