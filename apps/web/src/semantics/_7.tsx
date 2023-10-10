import { tw } from 'helpers';
import { View } from 'ui';

const box =
  'flex items-center justify-center font-bold rounded-xl border-2 py-2 px-2 flex-1 w-full';

const _7 = () => {
  return (
    <View
      title="7. Semantics (Layout)"
      difficulty={2}
      description="Copy the markup into the empty <div /> and use better semantic HTML elements to describe the various landmarks on the page. Imagine this being a product page for an e-commerce site with various blocks. Note: The colors are just used for visual separation and should not necessarily be considered hints."
    >
      <div className="max-w-2xl w-full flex flex-col gap-2 text-center">
        <div className={tw(box, 'flex-col gap-2 flex-1 border-gray-600')}>
          <div className={tw(box, 'border-blue-300')}>Message box</div>
          <div className={tw(box, 'border-blue-300')}>Header</div>
          <div className={tw(box, 'border-purple-300')}>Navigation</div>
          <div className={tw(box, 'border-purple-300')}>Breadcrumbs</div>
          <div className={tw(box, 'flex-col gap-2')}>
            Content
            <div className="grid grid-cols-4 w-full gap-2">
              <div className={tw(box, 'col-span-1 border-red-300')}>
                Google Adsense
              </div>
              <div
                className={tw(box, 'flex-col gap-2 col-span-3 border-red-300')}
              >
                Blocks
                <div className={tw(box, 'border-yellow-300')}>Product</div>
                <div className={tw(box, 'border-yellow-300')}>USP's</div>
                <div className={tw(box, 'border-yellow-300')}>
                  Product Reviews
                </div>
                <div className={tw(box, 'border-yellow-300')}>
                  Related Products
                </div>
                <div className={tw(box, 'border-yellow-300')}>SEO Text</div>
              </div>
            </div>
          </div>
          <div className={tw(box, 'border-purple-300')}>Newsletter</div>
          <div className={tw(box, 'border-blue-300')}>Footer</div>
        </div>
      </div>

      <div className="max-w-2xl flex flex-col gap-2 text-center">
        {/** Your solution goes here. */}
      </div>
    </View>
  );
};

export default _7;
