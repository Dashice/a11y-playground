import { tw } from 'helpers';
import { useState } from 'react';
import { View } from 'ui';

const getHeading = (isRTL: boolean) =>
  isRTL ? 'أصل الكعكة' : 'The Origin of the Cookie';

const getParagraph = (isRTL: boolean) =>
  isRTL
    ? `
    أولى الكعكات يُعتقد أنها كانت كعك تجريبية استخدمها الخبازون لاختبار حرارة الفرن. تعود إلى أوائل القرن السابع الميلادي في فارس، وهي منطقة تعرف اليوم بإيران. كانوا أحد أوائل الدول التي نمت وحصدت قصب السكر. مع الحروب والاستكشاف، تم تقديم السكر في نهاية المطاف إلى منطقة البحر الأبيض المتوسط ​​والدول الأوروبية وكذلك الكعك. وبحلول نهاية القرن الرابع عشر، كانت الكعك منتشرة في المدن الأوروبية. وكانت أقدم كتب الطهي في عصر النهضة مليئة بوصفات الكعك.
    `
    : `
      The first cookies are thought to be test cakes bakers used to test
      the oven temperature. They date back as early as 7th Century A.D.
      Persia which is now Iran. They were one of the first countries to
      grow and harvest sugar cane. With war and exploration eventually
      sugar was introduced to the Mediterranean area and European
      countries and so were cookies. And by the end of the 14th century,
      cookies were common place in European cities. The earliest cooking
      books from the Renaissance were chock full of cookie recipes.
    `;

const _5 = () => {
  const [isRTL, setIsRTL] = useState(false);

  return (
    <View
      title="5. Concepts (RTL)"
      difficulty={1}
      description="Below you will find a toggle, which switches writing direction from LTR to RTL and vice-versa. Using TailwindCSS or the style attribute; apply appropriate styles on the below elements so that they make sense for users viewing the page in RTL."
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

        <div
          dir={isRTL ? 'rtl' : 'ltr'}
          className="border border-slate-600 rounded-lg overflow-hidden max-w-2xl w-screen"
        >
          {/** Solution styling is applied to the JSX below this line. */}

          {/**
           * You can use the conditional "isRTL ? X : Y" or prefix TailwindCSS
           * classes with "ltr:xyz" or "rtl:xyz" to achieve most if not all of
           * the needed styling adjustments to support both writing directions.
           */}

          <div className="border-b border-slate-600 flex items-center gap-2 justify-between px-2 py-1">
            <div className="flex items-center gap-2">
              <img src="/icons/layout.svg" />
              <img src="/icons/arrow-left.svg" />
              <img src="/icons/arrow-right.svg" />
            </div>
            <div className="flex items-center gap-2">
              <img src="/icons/skip-back.svg" />
              <img src="/icons/play.svg" />
              <img src="/icons/skip-forward.svg" />
            </div>
            <div className="flex items-center gap-2">
              <img src="/icons/search.svg" />
              <img src="/icons/share.svg" />
              <img src="/icons/message-square.svg" />
            </div>
          </div>

          <div className="py-4 px-2 relative">
            <button
              type="button"
              className="rounded-full bg-slate-700 p-0.5 custom absolute"
              style={{ right: 16, top: 16 }}
              aria-label="Close"
            >
              <img src="/icons/x.svg" className="scale-75" />
            </button>
            <h2
              className="text-lg font-bold text-slate-300 mb-2"
              style={{ textAlign: 'left' }}
            >
              {getHeading(isRTL)}
            </h2>
            <p
              className="text-slate-400 text-xs mb-4"
              style={{ textAlign: 'left' }}
            >
              {getParagraph(isRTL)}
            </p>
            <p
              className="text-slate-400 text-xs mb-4"
              style={{ textAlign: 'left' }}
            >
              One popular type of cookie in Elizabethan England was a square
              short-cookie made with egg yolks and spices and baked on parchment
              paper.
            </p>
          </div>

          <div className="border-t border-slate-600 flex items-center gap-2 justify-between px-2 py-1">
            <div className="flex items-center gap-2">
              <img src="/icons/file-text.svg" />
              <img src="/icons/edit.svg" />
              <img src="/icons/list.svg" />
            </div>
            <div className="flex items-center gap-2">
              <img src="/icons/shopping-cart.svg" />
              <img src="/icons/image.svg" />
              <img src="/icons/line-chart.svg" />
            </div>
            <div className="flex items-center gap-2">
              <img src="/icons/bluetooth.svg" />
              <img src="/icons/rss.svg" />
              <img src="/icons/clock.svg" />
            </div>
          </div>
        </div>
      </div>
    </View>
  );
};

export default _5;
