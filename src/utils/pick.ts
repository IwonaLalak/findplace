export default function pick(obj: Record<string, any>, ...picked: string[]): Record<string, any> {
  if (!obj) {
    return undefined as any;
  }

  const filtered = picked.filter(key => key in obj).map(key => [key, obj[key]]);

  // @ts-ignore
  return filtered.reduce((a, [k, v]) => ((a[k] = v), a), {});
}
