import { useId, useState } from 'react';
import { View } from 'ui';

const _3 = () => {
  const [inputValue] = useState('admin@noaignites.se');

  const errorId = useId();

  return (
    <View
      title="3. ARIA (Error Handling)"
      difficulty={1}
      description="Copy the markup into the empty <div /> below to start. The input element below is displaying an error. How can we accurately, through the use of ARIA-attributes connect the error message to the input element?"
    >
      <div className="max-w-2xl flex flex-col gap-4">
        <label className="flex flex-col">
          <span className="text-gray-400">Email*:</span>
          <input value={inputValue} onChange={() => {}} required />
        </label>

        <p className="text-red-500">
          Invalid NoA Ignite format. Please try again.
        </p>
      </div>

      <div className="max-w-2xl flex flex-col gap-4">
        {/** Your solution goes here. */}
        <label className="flex flex-col">
          <span className="text-gray-400">Email*:</span>
          <input
            value={inputValue}
            onChange={() => {}}
            required
            aria-invalid="true"
            aria-describedby={errorId}
          />
        </label>

        <p id={errorId} className="text-red-500">
          Invalid NoA Ignite format. Please try again.
        </p>
      </div>
    </View>
  );
};

export default _3;
