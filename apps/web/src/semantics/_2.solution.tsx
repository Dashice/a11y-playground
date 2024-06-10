import { View } from 'ui';

const _2 = () => {
  return (
    <View
      title="2. Semantics (Inline)"
      difficulty={1}
      description="Copy the markup into the empty <div /> and fix any semantic oversights whilst preserving the styles."
    >
      <div className="max-w-2xl flex flex-col gap-4">
        <h2 className="text-2xl">Abbreviations</h2>
        <p>
          An <strong>abbreviation</strong> (from Latin <i>brevis</i>, meaning{' '}
          <em>short</em>) is a shortened form of a word or phrase, by any
          method.
        </p>
        <p>
          An <strong>initialism</strong> is an abbreviation pronounced by
          spelling out each letter, i.e.{' '}
          <em>
            <abbr title="Federal Bureau of Investigation">FBI</abbr>
          </em>
          ,{' '}
          <em>
            <abbr title="United States of America">USA</abbr>
          </em>
          ,{' '}
          <em>
            <abbr title="Be Right Back">BRB</abbr>
          </em>
          .
        </p>
      </div>
    </View>
  );
};

export default _2;
