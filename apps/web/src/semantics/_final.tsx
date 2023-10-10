import { View } from 'ui';

const _10 = () => {
  return (
    <View
      title="Final: Semantics (Quote Block)"
      difficulty={3}
      description="From scratch, create a quote block with the following contents (see below)."
    >
      <div className="max-w-2xl flex flex-col gap-4">
        <p className="font-bold">
          Your quote block should have the following information:
        </p>
        <ul className="list-disc ps-4">
          <li>A quote. Make one up yourself, something you live by.</li>
          <li>The author of the quote, as in; you.</li>
          <li>The date at which you came up with it.</li>
          <li>
            A reference to your book, with a link to it. (Use your imagination)
          </li>
        </ul>
      </div>

      <div className="max-w-2xl flex flex-col gap-4">
        {/** Your solution goes here. */}
      </div>
    </View>
  );
};

export default _10;
