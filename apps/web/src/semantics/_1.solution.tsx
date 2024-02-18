import { View } from 'ui';

const _1 = () => {
  return (
    <View
      title="1. Semantics (Headings)"
      difficulty={1}
      description="Copy the markup into the empty <div /> and fix any potential errors whilst preserving the styles. Improvements are appreciated."
    >
      <div className="max-w-2xl flex flex-col gap-4">
        <hgroup>
          <h2 className="text-4xl">Headings: In Writing</h2>
          <h3 className="text-2xl">A background</h3>
        </hgroup>
        <h4 className="text-lg">Index Term</h4>

        <p>
          In information retrieval, an <strong>index term</strong> (also known
          as <strong>subject term</strong>, <strong>subject heading</strong>,{' '}
          <strong>descriptor</strong>, or <strong>keyword</strong>) is a term
          that captures the essence of the topic of a document. Index terms make
          up a controlled vocabulary for use in bibliographic records. They are
          an integral part of bibliographic control, which is the function by
          which libraries collect, organize and disseminate documents.
        </p>
      </div>
    </View>
  );
};

export default _1;
