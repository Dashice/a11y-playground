import { tw } from 'helpers';
import { useState } from 'react';
import { View } from 'ui';

const _9 = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <View
      title="9. Semantics (Disclosure)"
      difficulty={2}
      description="Create a disclosure, without any TS / JS, which is open by default. The example uses React, you will just use regular JSX. Note: The example disclosure is not accessible; this is intentional."
    >
      <div className="max-w-2xl flex flex-col gap-4">
        <div className="border-white border p-2">
          <button
            className="bg-transparent text-start p-0"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="text-[13px] me-1">{isOpen ? '▼' : '▶'} </span>
            Cookie Policy
          </button>
          <div className={tw(isOpen ? 'block' : 'hidden')}>
            Our cookies are delivered from our warehouse within 1-3 business
            days and are stored in vacuum-sealed packaging. Freshness
            guaranteed!
          </div>
        </div>
      </div>

      <div className="max-w-2xl flex flex-col gap-4">
        {/** Your solution goes here. */}
      </div>
    </View>
  );
};

export default _9;
