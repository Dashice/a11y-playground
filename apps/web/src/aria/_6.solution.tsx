import { useCounter } from 'hooks';
import { View } from 'ui';
/** The `tw` function can be used for conditional styling with Tailwind. */
import { tw } from 'helpers';
import type { KeyboardEvent } from 'react';

const doNotChangeThisVariable =
  'aspect-square flex items-center justify-center h-8 w-8 first:border-e last:border-s bg-slate-800 focus:bg-slate-500 active:text-opacity-50 border-gray-500';

const buttonStyles = doNotChangeThisVariable;

const _6 = () => {
  const [count, { decrement, increment }] = useCounter(0, { min: 1, max: 5 });

  const handleKeydown = (event: KeyboardEvent<HTMLParagraphElement>) => {
    const key = event.key;

    if (key === 'ArrowUp') {
      event.preventDefault();
      increment();
    }

    if (key === 'ArrowDown') {
      event.preventDefault();
      decrement();
    }
  };

  return (
    <View
      title="6. ARIA (Quantity Counter)"
      difficulty={3}
      description="This exercise may require some basic React / TS knowledge. Below, you will find a product quantity picker. The [+] must remain a <div />. Edit both [-] & [+] so that they behave the same way (focus, keyboard shortcuts etc.), add appropriate roles / labels / ARIA states and ensure that [-] is disabled when the quantity is 1 and [+] is disabled when the quantity is five. Apply the TailwindCSS 'className' 'opacity-50' when the buttons are disabled. Use whatever approach you want to solve this."
    >
      <div className="flex items-center border rounded-md overflow-hidden border-gray-500">
        <button
          type="button"
          onClick={decrement}
          className={tw(buttonStyles, 'disabled:opacity-50')}
          disabled={count === 1}
          aria-label={`Decrease quantity by 1. Current quantity: ${count}`}
          tabIndex={-1} // If <p /> handles keyboard events.
        >
          -
        </button>
        <p
          role="spinbutton"
          className="w-12 text-center"
          onKeyDown={handleKeydown}
          aria-valuemin={1}
          aria-valuemax={5}
          aria-valuenow={1}
          aria-label={`${count}: Product quantity`}
          tabIndex={0}
        >
          {count}
        </p>
        <div
          role="button"
          onClick={increment}
          className={tw(
            buttonStyles,
            'cursor-pointer',
            count === 5 && 'pointer-events-none opacity-50 cursor-default'
          )}
          tabIndex={-1} // If <p /> handles keyboard events.
          /* tabIndex={count === 5 ? -1 : 0} */ // Alternative, if <p /> does not handle keyboard events.
          aria-disabled={count === 5}
          aria-label={`Increase quantity by 1. Current quantity: ${count}`}
        >
          +
        </div>
      </div>
    </View>
  );
};

export default _6;
