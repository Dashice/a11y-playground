import { tw } from 'helpers';
import { useState } from 'react';
import { Portal, View } from 'ui';

const styles = {
  initiator:
    'rounded-md px-4 py-2 flex-1 text-center bg-slate-700 border border-slate-400 text-slate-100 active:bg-slate-500',
  container:
    'h-full w-full fixed z-10 inset-0 m-auto overscroll-contain bg-black/20 backdrop-blur-sm flex items-center justify-center',
  wrapper:
    'bg-slate-900 m-auto p-4 rounded-xl shadow-2xl border border-slate-600 max-w-md',
  title: 'mx-auto text-center font-bold text-xl mb-2 text-slate-200',
  text: 'mb-6 text-sm text-slate-300',
  options: 'flex gap-4 items-center',
  option: 'rounded-md px-4 py-2 flex-1 text-center',
  cancel:
    'bg-slate-700 border border-slate-400 text-slate-100 active:bg-slate-500',
  accept: 'bg-red-700 border border-red-400 text-red-100 active:bg-red-500',
};

const _3 = () => {
  const [isOpen, setIsOpen] = useState(false);

  /** If you are attempting the challenge: Add, edit or remove any code between this line... */

  /** ... and this line. Do as you please; in other words. */

  return (
    <View
      title="3. Patterns (Window)"
      difficulty="secret"
      description="Identify the pattern used in the markup below with APG and add the optimal semantics & ARIA attributes to make it accessible."
      challenge="Make the markup & JavaScript adhere to the APG Guidelines for full accessibility compliance."
    >
      <div className="max-w-2xl flex flex-col gap-4">
        {/** Modify the code between this line... */}

        <div className={styles.initiator} onClick={() => setIsOpen(true)}>
          Harmless Box of Destruction
        </div>

        <Portal to={null} when={isOpen} className={styles.container}>
          <div className={styles.wrapper}>
            <p className={styles.title}>Factory reset</p>
            <p className={styles.text}>
              Are you sure you want to initiate the factory reset process? All
              system and personal data on this device will be permanently
              deleted. This action cannot be undone.
            </p>
            <div className={styles.options}>
              <div
                className={tw(styles.option, styles.cancel)}
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </div>
              <div
                className={tw(styles.option, styles.accept)}
                onClick={() => setIsOpen(false)}
              >
                Yes, I'm crazy
              </div>
            </div>
          </div>
        </Portal>

        {/** ... and this line. */}
      </div>
    </View>
  );
};

export default _3;
