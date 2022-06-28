export default function omit(obj: Record<string, any>, ...removal: string[]): Record<string, any> {
  return removal.reduce(
    (result, key) => {
      delete result[key];
      return result;
    },
    { ...obj }
  );
}
