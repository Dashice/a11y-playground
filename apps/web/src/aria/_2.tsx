import { View } from 'ui';

const _2 = () => {
  return (
    <View
      title="2. ARIA (Showing / Hiding content)"
      difficulty={2}
      description="There are multiple ways of hiding content from users. Each one of the following examples should hide its content from some demographic of users. Copy the markup into the empty <div /> below to start. Note: This exercise does not require any JavaScript, but may need some CSS / TailwindCSS or ARIA-attributes."
      challenge="The last item ideally requires the use of TailwindCSS, see if you can solve it."
    >
      <div className="max-w-2xl flex flex-col gap-4">
        <p>
          This text should only be viewable by sighted users and not
          screen-reader users.
        </p>
        <p>This text should only be viewable by screen-reader users.</p>
        <p>This text should only be scannable by search engines.</p>
        <p>
          This text should never be visible to anyone visiting / scanning the
          site; but still present in this document for other developers to see.
        </p>
        <p>This text should not be viewable in printed format.</p>
      </div>

      <div className="max-w-2xl flex flex-col gap-4">
        {/** Your solution goes here. */}
      </div>
    </View>
  );
};

export default _2;
