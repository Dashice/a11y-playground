export type ClampNumberOptions = {
  /** The minimum value to constrain the `value` to. */
  min: number;
  /** The maximum value to constrain the `value` to. */
  max: number;
  /**
   * The number of decimal places to round the value to.
   *
   * @default 0
   */
  decimals?: number;
  /**
   * The value to round the `value` to.
   *
   * @default 0
   */
  roundToNearest?: number;
};

/**
 * Clamps the passed `value` to the `min` and `max` values. Additionally may
 * round the value to the nearest `roundToNearest` value and limit the number of
 * decimal places to `decimals`.
 */
export const clampNumber = (
  value: number,
  { min, max, decimals = 0, roundToNearest = 0 }: ClampNumberOptions
) => {
  const constrained = Math.max(min, Math.min(max, value));
  const rounded = roundToNearest
    ? Math.round(constrained / roundToNearest) * roundToNearest
    : constrained;

  return Number(rounded.toFixed(decimals));
};
