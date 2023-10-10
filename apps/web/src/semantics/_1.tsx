import { View } from 'ui';

const _1 = () => {
  return (
    <View
      title="1. Semantics (Headings)"
      difficulty={1}
      description="Copy the markup into the empty <div /> and fix any potential errors whilst preserving the styles. Improvements are appreciated."
    >
      <div className="max-w-2xl flex flex-col gap-4">
        <div>
          <h2 className="text-4xl">Headings: In Writing</h2>
          <h4 className="text-2xl">A background</h4>
        </div>
        <h5 className="text-lg">Index Term</h5>
        <p className="">
          In information retrieval, an{' '}
          <span className="font-bold">index term</span> (also known as{' '}
          <span className="font-bold">subject term</span>,{' '}
          <span className="font-bold">subject heading</span>,{' '}
          <span className="font-bold">descriptor</span>, or{' '}
          <span className="font-bold">keyword</span>) is a term that captures
          the essence of the topic of a document. Index terms make up a
          controlled vocabulary for use in bibliographic records. They are an
          integral part of bibliographic control, which is the function by which
          libraries collect, organize and disseminate documents.
        </p>
      </div>

      <div className="max-w-2xl flex flex-col gap-4">
        {/** Your solution goes here. */}
      </div>
    </View>
  );
};

export default _1;
