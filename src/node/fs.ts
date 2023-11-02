import { readFile } from 'fs/promises';
import { asFailable, safeParseJson } from '../common/index.js';

export async function safeReadFile(path: string) {
  return asFailable(() => readFile(path, 'utf-8'));
}

export async function safeReadJsonFile(path: string) {
  const file = await safeReadFile(path);
  if (!file.success) {
    return file;
  }

  return safeParseJson(file.value);
}
