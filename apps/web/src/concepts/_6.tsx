import { tw } from 'helpers';
import { useState } from 'react';
import { View } from 'ui';

const getInstructions = (isRTL: boolean) =>
  isRTL
    ? 'ابدأ بتحديد النص الذي تريد ترجمته من السابقة. ستلاحظ أن ترتيب أزرار الراديو سيتغير استناداً إلى حالة الزر أعلاه.'
    : 'Replace this text with your solution from exercise "4. Concepts (Radio Buttons)". You will notice that the order of your radio buttons will change based on the above button state.';

const _6 = () => {
  const [isRTL, setIsRTL] = useState(true);

  return (
    <View
      title="6. Concepts (Radio Buttons & RTL — Continued)"
      difficulty={2}
      description="Using the solution from exercise '4. Concepts (Radio Buttons)'. Ensure that the keyboard navigation logic is correct when the page is viewed in RTL direction, whilst simultaneously working as it previously did in LTR direction."
    >
      <div className="max-w-2xl flex flex-col gap-4">
        <button
          type="button"
          className={tw(
            'custom flex items-center justify-center w-72 before:absolute after:absolute relative border mx-auto h-10 rounded-full',
            isRTL
              ? 'before:content-["←"] before:left-4 border-green-500'
              : 'after:right-4 after:content-["→"] border-blue-500'
          )}
          onClick={() => setIsRTL(!isRTL)}
        >
          {isRTL ? 'Right-to-Left' : 'Left-to-Right'}
        </button>

        <div
          role="separator"
          className="my-4 h-px w-full max-w-[200px] mx-auto bg-slate-500"
          aria-orientation="horizontal"
        />

        <div dir={isRTL ? 'rtl' : 'ltr'}>
          {/** Your solution goes here. */}
          {getInstructions(isRTL)}
        </div>
      </div>
    </View>
  );
};

export default _6;
