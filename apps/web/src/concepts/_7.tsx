import { tw } from 'helpers';
import { useEffect, useState } from 'react';
import { View } from 'ui';

type State = boolean | undefined;

const _7 = () => {
  /** These three states should be set dynamically to either `true` or `false`. */
  const [prefersHighContrast, setPrefersHighContrast] = useState<State>();
  const [prefersDarkMode, setPrefersDarkMode] = useState<State>();
  const [prefersReducedMotion, setPrefersReducedMotion] = useState<State>();

  useEffect(() => {
    /** The JavaScript part of your solution goes here... */
  }, []);

  return (
    <View
      title="7. Concepts (User Preferences)"
      difficulty={1}
      description="Below you will find three smaller challenges, each telling you what should happen to the element when some operating system level feature is enabled or disabled. Figure out how to detect these user preferences inside the provided 'useEffect' and set the states appropriately."
    >
      <div className="max-w-2xl flex flex-col gap-4">
        {/** The JSX part of your solution goes here. */}

        <p
          className={tw(
            prefersHighContrast === true && 'text-white',
            prefersHighContrast !== true && 'text-slate-700'
          )}
        >
          When high contrast is preferred; make my text color "text-slate-700".
        </p>

        <ul>
          <li
            className={tw(
              prefersDarkMode === true && 'bg-slate-700 text-slate-300'
            )}
          >
            Night mode: I have Tailwind classes "bg-slate-700 text-slate-300".
          </li>
          <li
            className={tw(
              prefersDarkMode === false && 'bg-slate-300 text-slate-700'
            )}
          >
            Light mode: I have Tailwind classes "bg-slate-300 text-slate-700".
          </li>
        </ul>

        <p className={tw(prefersReducedMotion !== true && 'animate-pulse')}>
          When reduced motion is preferred, stop my animation.
        </p>
      </div>
    </View>
  );
};

export default _7;
