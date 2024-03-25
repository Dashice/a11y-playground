import { tw } from 'helpers';
import { View } from 'ui';

const box =
  'flex items-center justify-center font-bold rounded-xl border-2 py-2 px-2 flex-1 w-full';

const _5 = () => {
  return (
    <View
      title="5. ARIA (Roles - Continued)"
      difficulty={1}
      description="A client urgently calls you and says that their page layout is not accessible. This is not your fault; some other developers caused this. You do not have time to untangle their CSS and change the elements used; but you have time to set the appropriate roles on all the landmark elements. Copy the markup into the empty <div /> below to start."
    >
      <div className="max-w-2xl flex flex-col gap-4">
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

      <div className="max-w-2xl flex flex-col gap-4">
        <div className={tw(box, 'flex-col gap-2 flex-1 border-gray-600')}>
          <div role="complementary" className={tw(box, 'border-blue-300')}>
            Message box
          </div>
          <div role="banner" className={tw(box, 'border-blue-300')}>
            Header
          </div>
          <div role="navigation" className={tw(box, 'border-purple-300')}>
            Navigation
          </div>
          <div role="navigation" className={tw(box, 'border-purple-300')}>
            Breadcrumbs
          </div>
          <div role="main" className={tw(box, 'flex-col gap-2')}>
            Content
            <div className="grid grid-cols-4 w-full gap-2">
              <div
                role="complementary"
                className={tw(box, 'col-span-1 border-red-300')}
              >
                Google Adsense
              </div>
              <div
                className={tw(box, 'flex-col gap-2 col-span-3 border-red-300')}
              >
                Blocks
                <div role="article" className={tw(box, 'border-yellow-300')}>
                  Product
                </div>
                <div role="region" className={tw(box, 'border-yellow-300')}>
                  USP's
                </div>
                <div
                  role="complementary"
                  className={tw(box, 'border-yellow-300')}
                >
                  Product Reviews
                </div>
                <div
                  role="complementary"
                  className={tw(box, 'border-yellow-300')}
                >
                  Related Products
                </div>
                <div role="region" className={tw(box, 'border-yellow-300')}>
                  SEO Text
                </div>
              </div>
            </div>
          </div>
          <div role="complementary" className={tw(box, 'border-purple-300')}>
            Newsletter
          </div>
          <div role="contentinfo" className={tw(box, 'border-blue-300')}>
            Footer
          </div>
        </div>
      </div>
    </View>
  );
};

export default _5;
