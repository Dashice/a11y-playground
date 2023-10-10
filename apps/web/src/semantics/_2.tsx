import { View } from 'ui';

const _2 = () => {
  return (
    <View
      title="2. Semantics (Inline)"
      difficulty={1}
      description="Copy the markup into the empty <div /> and fix any semantic oversights whilst preserving the styles."
    >
      <div className="max-w-2xl flex flex-col gap-4">
        <p className="text-2xl">Abbreviations</p>
        <p>
          An <span className="font-bold">abbreviation</span> (from Latin{' '}
          <span className="italic">brevis</span>, meaning{' '}
          <span className="italic">short</span>) is a shortened form of a word
          or phrase, by any method.
        </p>
        <p>
          An <span className="font-bold">initialism</span> is an abbreviation
          pronounced by spelling out each letter, i.e.{' '}
          <span className="italic">FBI</span>,{' '}
          <span className="italic">USA</span>,{' '}
          <span className="italic">BRB</span>.
        </p>
      </div>

      <div className="max-w-2xl flex flex-col gap-4">
        {/** Your solution goes here. */}
      </div>
    </View>
  );
};

export default _2;
