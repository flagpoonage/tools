import { FailableResult } from "./failable";
export declare function safeParseJson(value: string): FailableResult<unknown>;
export declare function safeParseURL(value: string): FailableResult<URL>;
