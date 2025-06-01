import type { PathLike } from 'fs';
import { type FileHandle, readFile } from 'fs/promises';
import { createResultAsync } from '../common/result';
import { safeParseJson } from '../common/safe';

export async function safeReadUtf8File(path: PathLike | FileHandle) {
  return createResultAsync(() => readFile(path, 'utf-8'));
}

export async function safeReadJsonFile(path: PathLike | FileHandle) {
  const file = await safeReadUtf8File(path);
  if (!file.success) {
    return file;
  }

  return safeParseJson(file.value);
}
