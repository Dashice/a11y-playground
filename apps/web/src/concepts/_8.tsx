import { tw } from 'helpers';
import { useEffect, useRef, useState } from 'react';
import { View } from 'ui';

const container =
  'border border-slate-700 rounded-lg pt-8 pb-4 px-4 flex gap-4 absolute mx-auto inset-x-0 w-max duration-300';
const heading =
  'absolute top-[-14px] font-medium inset-x-0 text-center text-lg uppercase bg-gray-950 text-slate-400 w-fit mx-auto px-4';
const button =
  'custom border rounded-md w-40 py-1 duration-300 active:duration-0';

const _8 = () => {
  const [isNetherworldOpen, setIsNetherworldOpen] = useState(false);
  const runButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isNetherworldOpen || !runButtonRef.current) return;
    runButtonRef.current?.focus();
  }, [isNetherworldOpen]);

  /** All of your solution should go between here... */

  /** ... and here. */

  return (
    <View
      title="8. Concepts (Return Focus)"
      difficulty={2}
      description="Some portals have opened into the Netherworld! Stepping through them places focus on the Return portal. When you step through the Return portal, you should be returned to the portal you came through. Use any React APIs you deem necessary to achieve this."
      challenge="If you managed to solve this exercise, create a re-usable hook from your solution and use it instead."
    >
      <div className="max-w-2xl flex flex-col gap-4">
        <div
          className={tw(
            container,
            isNetherworldOpen
              ? 'opacity-20 translate-y-[-125%]'
              : 'opacity-100 translate-y-0'
          )}
          inert={tw(isNetherworldOpen) as ''}
        >
          <h2 className={heading}>Gateways to the Nether</h2>

          <button
            type="button"
            className={tw(
              button,
              'border-indigo-800 text-indigo-400 active:bg-indigo-950'
            )}
            onClick={() => setIsNetherworldOpen(!isNetherworldOpen)}
          >
            Gate Ration
          </button>
          <button
            type="button"
            className={tw(
              button,
              'border-purple-800 text-purple-400 active:bg-purple-950'
            )}
            onClick={() => setIsNetherworldOpen(!isNetherworldOpen)}
          >
            Gate Passion
          </button>
          <button
            type="button"
            className={tw(
              button,
              'border-fuchsia-800 text-fuchsia-400 active:bg-fuchsia-950'
            )}
            onClick={() => setIsNetherworldOpen(!isNetherworldOpen)}
          >
            Gate Fashion
          </button>
        </div>

        <div
          className={tw(
            container,
            'justify-center',
            isNetherworldOpen
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-[125%]'
          )}
          inert={tw(!isNetherworldOpen && '') as ''}
        >
          <h2 className={heading}>👻🧟‍♀️💀</h2>

          <button
            ref={runButtonRef}
            type="button"
            className={tw(
              button,
              'border-orange-800 text-orange-400 active:bg-orange-950'
            )}
            onClick={() => setIsNetherworldOpen(!isNetherworldOpen)}
          >
            Return!
          </button>
        </div>
      </div>
    </View>
  );
};

export default _8;
