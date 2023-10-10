import { tw } from 'helpers';
import { useState } from 'react';
import { View } from 'ui';

type Computer = {
  title: string;
  price: number;
};

const computers = [
  { title: 'MacBook Air', price: 999 },
  { title: 'MacBook Pro', price: 1299 },
  { title: 'iMac', price: 1799 },
  { title: 'Dell XPS', price: 29 },
];

const _4 = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [selected, setSelected] = useState<Computer | null>(null);

  return (
    <View
      title="4. ARIA (Roles & States)"
      difficulty={2}
      description="Keeping appropriate labelling in-mind; copy the markup into the empty <div /> below and find the most appropriate role for each container element. Then, set up the appropriate states for each element without changing the HTML elements used in the markup."
    >
      <div className="max-w-2xl flex flex-col gap-4 items-center">
        <section className="flex items-center gap-12">
          <span className="text-4xl">🥳</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48px"
            height="48px"
            viewBox="0 0 1000 1000"
            fillRule="evenodd"
            fill="dodgerblue"
          >
            <path d="M246.413 793.948C163.943 722.723 111.716 617.413 111.716 500c0-214.3 173.984-388.284 388.284-388.284S888.284 285.7 888.284 500c0 117.413-52.227 222.723-134.697 293.948C723.739 681.843 621.45 599.151 500 599.151s-223.739 82.692-253.587 194.797zM500 251.48c79.452 0 143.957 64.505 143.957 143.957S579.452 539.394 500 539.394s-143.957-64.505-143.957-143.957S420.548 251.48 500 251.48z" />
          </svg>
        </section>

        <div className="bg-gray-700 w-full h-px my-4" />

        <button
          className={tw(
            'rounded-full h-8 w-14 relative flex justify-center items-center p-0 duration-300',
            isEnabled ? 'bg-green-500' : 'bg-gray-400'
          )}
          onClick={() => setIsEnabled(!isEnabled)}
        >
          <div
            className={tw(
              'bg-white rounded-full absolute transition duration-300',
              isEnabled ? 'translate-x-3' : '-translate-x-3'
            )}
            style={{ height: 25, width: 25 }}
          />
        </button>

        <div className="bg-gray-700 w-full h-px my-4" />

        <div className="bg-gray-500 w-48 h-2 rounded-full relative overflow-hidden">
          <div className="absolute bg-blue-500 h-full start-0 w-1/4" />
        </div>
        <span className="text-gray-400 text-xs">
          Loading assets (149 / 596)...
        </span>

        <div className="bg-gray-700 w-full h-px my-4" />

        <h2 className="text-xl font-bold">Favorite Computer</h2>
        <div className="gap-2 flex flex-col">
          {computers.map((computer, index) => {
            const isSelected = selected?.title === computer.title;

            return (
              <button
                key={index}
                className={tw(
                  'flex items-center justify-between bg-transparent px-2 py-1 gap-12 border rounded-lg',
                  isSelected && 'border-blue-500',
                  !isSelected && 'opacity-60'
                )}
                onClick={() => setSelected(computer)}
              >
                <p>{computer.title}</p>
                <p>${computer.price}</p>
              </button>
            );
          })}
        </div>
      </div>

      <div className="max-w-2xl flex flex-col gap-4 items-center">
        {/** Your solution goes here. */}
      </div>
    </View>
  );
};

export default _4;
