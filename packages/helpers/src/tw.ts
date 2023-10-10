/**
 * Concatenates a list of strings into a single string. Any falsy values are ignored.
 * This is useful for conditionally applying classes to an element.
 *
 * @example tw('foo', isTrue && 'bar', isFalse && 'baz')
 * // => 'foo bar'
 */
export const tw = <
  T extends Array<string | number | boolean | null | undefined>,
>(
  ...args: T
): T[number] extends string ? string : string | undefined => {
  const array = args.filter((arg) => arg);
  return array.length ? (array.join(' ') as string) : (undefined as never);
};
