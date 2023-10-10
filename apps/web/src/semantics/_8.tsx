import { useEffect, useState } from 'react';
import { View } from 'ui';

const _8 = () => {
  const [valueOne, setValueOne] = useState<number>(0);
  const [valueTwo, setValueTwo] = useState<number>(0);

  const [date, setDate] = useState('');

  useEffect(() => {
    setDate(new Date().toLocaleString());
  }, []);

  return (
    <View
      title="8. Semantics (Inline - Continued)"
      difficulty={1}
      description="Copy the markup into the empty <div /> and fix any semantic oversights. Minimal styles are used this time, use your best judgement."
    >
      <div className="max-w-2xl flex flex-col gap-4">
        <p>The sea is vast, and made up of a butt-load of H2O particles.</p>
        <div className="w-full bg-gray-500 h-px" />
        <p>
          Press
          <span className="bg-gray-700 items-center justify-center w-8 mx-2 rounded-md aspect-square inline-flex">
            ⌘
          </span>
          +
          <span className="bg-gray-700 items-center justify-center w-8 mx-2 rounded-md aspect-square inline-flex">
            ⌥
          </span>
          +{' '}
          <span className="bg-gray-700 items-center justify-center w-8 mx-2 rounded-md aspect-square inline-flex">
            {'P'}
          </span>
          to execute a cool command.
        </p>
        <div className="w-full bg-gray-500 h-px" />
        <p>
          From: <span className="text-red-500">1587 SEK</span>{' '}
          <span className="line-through text-gray-400">1999 SEK</span>
        </p>
        <div className="w-full bg-gray-500 h-px" />
        <p>
          From: <span>1587 SEK</span>
        </p>
        <div className="w-full bg-gray-500 h-px" />

        <div className="flex items-center gap-2">
          <input
            type="number"
            className="w-16"
            value={valueOne}
            onChange={(e) => setValueOne(parseInt(e.target.value))}
          />
          +
          <input
            type="number"
            className="w-16"
            value={valueTwo}
            onChange={(e) => setValueTwo(parseInt(e.target.value))}
          />
          =<p>{valueOne + valueTwo}</p>
        </div>
        <div className="w-full bg-gray-500 h-px" />
        <p>
          This page was last refreshed at <span>{date}</span>
        </p>
        <div className="w-full bg-gray-500 h-px" />
        <p>NoA Ignite Address (Stockholm)</p>
        <p className="flex flex-col">
          <span>Tulegatan 7</span>
          <span>113 53</span>
          <span>Stockholm Sweden</span>
        </p>
      </div>

      <div className="max-w-2xl flex flex-col gap-4">
        {/** Your solution goes here. */}
      </div>
    </View>
  );
};

export default _8;
