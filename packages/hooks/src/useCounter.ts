import { useState } from 'react';

export type ClampNumberOptions = {
  /** The minimum value to constrain the `value` to. */
  min: number;
  /** The maximum value to constrain the `value` to. */
  max: number;
  /**
   * The number of decimal places to round the value to.
   * @default 0
   */
  decimals?: number;
  /**
   * The value to round the `value` to.
   * @default 0
   */
  roundToNearest?: number;
};

/**
 * Clamps the passed `value` to the `min` and `max` values.
 * Additionally may round the value to the nearest `roundToNearest` value
 * and limit the number of decimal places to `decimals`.
 */
const clampNumber = (
  value: number,
  { min, max, decimals = 0, roundToNearest = 0 }: ClampNumberOptions
) => {
  const constrained = Math.max(min, Math.min(max, value));
  const rounded = roundToNearest
    ? Math.round(constrained / roundToNearest) * roundToNearest
    : constrained;

  return Number(rounded.toFixed(decimals));
};

interface CounterOptions {
  /**
   * The amount to step backwards / forwards using the returned
   * `increment()` and `decrement()` functions.
   */
  step?: number;
  /**
   * The initial value to use when calling `reset()`.
   * @default 0
   */
  initialValue?: number;
  /** The minimum value to constrain the `value` to. */
  min?: number;
  /** The maximum value to constrain the `value` to. */
  max?: number;
  /** A callback that is called whenever the value changes. */
  onChange?: (newValue: number) => void;
}

/**
 * A hook for managing a counter. Returns the current value and a set of
 * functions for incrementing, decrementing, setting, and resetting the value.
 *
 * @example
 * const [count, { increment, decrement }] = useCounter(0, { step: 5 });
 * const [count, { set, reset }] = useCounter(0, { initialValue: 10, min: 0, max: 100 });
 */
export const useCounter = (
  value: number,
  {
    step = 1,
    initialValue = 0,
    min = Number.MIN_VALUE,
    max = Number.MAX_VALUE,
    onChange,
  }: CounterOptions
) => {
  const constrain = (newValue: number) =>
    clampNumber(newValue, { min, max, roundToNearest: step });

  const [number, setNumber] = useState(constrain(value));

  const handleChange = (newValue: number) => onChange?.(newValue);

  const set = (newValue: number) => {
    const constrainedValue = constrain(newValue);
    setNumber(constrainedValue);
    handleChange(constrainedValue);
    return constrainedValue;
  };

  const reset = () => {
    set(constrain(initialValue));
    return initialValue;
  };

  const increment = () => set(number + step);

  const decrement = () => set(number - step);

  return [
    number,
    {
      /** Increments the current value by `step` */
      increment,
      /** Decrements the current value by `step` */
      decrement,
      /**
       * Sets the current value to a new value.
       * If the new value is not within the `min` and `max` range,
       * it will be clamped to the nearest valid value.
       */
      set,
      /** Resets the current value to the `initialValue`. */
      reset,
    },
  ] as const;
};
