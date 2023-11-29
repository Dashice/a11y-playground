import { clampNumber, tw } from 'helpers';
import { useState } from 'react';
import { View } from 'ui';

const styles = {
  container:
    'border rounded-xl border-slate-500 overflow-hidden relative box-content',
  signs: 'flex items-center gap-2 absolute top-1 end-1 z-10',
  sign: 'h-8 w-12 flex items-center justify-center rounded-lg border border-slate-500 bg-black/30 backdrop-blur-md',
  list: 'absolute inset-0 flex whitespace-nowrap transition-transform duration-300',
  item: 'flex items-center w-full shrink-0 justify-center text-4xl font-bold h-full',
};

const height = 320;
const width = 480;

const _2 = () => {
  /** If you are attempting the challenge: Add, edit or remove any code between this line... */
  const [selectedIndex, setSelectedIndex] = useState(1);

  const isFirst = selectedIndex === 1;
  const isLast = selectedIndex === 5;

  const clamp = (to: number) => clampNumber(to, { min: 1, max: 5 });

  const decrement = () => setSelectedIndex((p) => clamp(p - 1));

  const increment = () => setSelectedIndex((p) => clamp(p + 1));

  const transform = `translateX(${width * (selectedIndex - 1) * -1}px)`;

  /** ... and this line. Do as you please; in other words. */

  return (
    <View
      title="2. Patterns (Deck)"
      difficulty="secret"
      description="Identify the pattern used in the markup below with APG and add the optimal semantics & ARIA attributes to make it accessible."
      challenge="Make the markup & JavaScript adhere to the APG Guidelines for full accessibility compliance."
    >
      <div className="max-w-2xl flex flex-col gap-4">
        {/** Modify the code between this line... */}

        <div className={styles.container} style={{ width, height }}>
          <div className={styles.signs}>
            <div
              className={tw(styles.sign, isFirst && 'opacity-50')}
              onClick={decrement}
            >
              <img src="/icons/arrow-left.svg" alt="" height={16} width={16} />
            </div>
            <div
              className={tw(styles.sign, isLast && 'opacity-50')}
              onClick={increment}
            >
              <img src="/icons/arrow-right.svg" alt="" height={16} width={16} />
            </div>
          </div>

          <div className={styles.list} style={{ transform }}>
            <div className={tw(styles.item, 'bg-blue-700')}>1</div>
            <div className={tw(styles.item, 'bg-cyan-700')}>2</div>
            <div className={tw(styles.item, 'bg-lime-700')}>3</div>
            <div className={tw(styles.item, 'bg-green-700')}>4</div>
            <div className={tw(styles.item, 'bg-yellow-700')}>5</div>
          </div>
        </div>

        {/** ... and this line. */}
      </div>
    </View>
  );
};

export default _2;
