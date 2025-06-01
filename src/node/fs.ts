import { readFile } from 'fs/promises';
import { createResultAsync } from '../common/result';
import { safeParseJson } from '../common/safe';

export async function safeReadFile(path: string) {
  return createResultAsync(() => readFile(path, 'utf-8'));
}

export async function safeReadJsonFile(path: string) {
  const file = await safeReadFile(path);
  if (!file.success) {
    return file;
  }

  return safeParseJson(file.value);
}
