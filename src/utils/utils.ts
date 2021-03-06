export const urlRegexp = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;

// 是否是Url
export function isUrl(path: string): boolean {
  return urlRegexp.test(path);
}

// 检查 `value` 是否为承诺（Promise）
export function isPromise(value: any): value is Promise<any> {
  return !!value && typeof value.then === 'function';
}
