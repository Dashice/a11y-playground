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
          <aside className={tw(box, 'border-blue-300')}>Message box</aside>
          <header className={tw(box, 'border-blue-300')}>Header</header>
          <nav className={tw(box, 'border-purple-300')}>Navigation</nav>
          <nav className={tw(box, 'border-purple-300')}>Breadcrumbs</nav>
          <div className={tw(box, 'flex-col gap-2')}>
            Content
            <div className="grid grid-cols-4 w-full gap-2">
              <aside className={tw(box, 'col-span-1 border-red-300')}>
                Google Adsense
              </aside>
              <article
                className={tw(box, 'flex-col gap-2 col-span-3 border-red-300')}
              >
                Blocks
                <section className={tw(box, 'border-yellow-300')}>
                  Product
                </section>
                <section className={tw(box, 'border-yellow-300')}>
                  USP's
                </section>
                <aside className={tw(box, 'border-yellow-300')}>
                  Product Reviews
                </aside>
                <aside className={tw(box, 'border-yellow-300')}>
                  Related Products
                </aside>
                <section className={tw(box, 'border-yellow-300')}>
                  SEO Text
                </section>
              </article>
            </div>
          </div>
          <aside className={tw(box, 'border-purple-300')}>Newsletter</aside>
          <footer className={tw(box, 'border-blue-300')}>Footer</footer>
        </div>
      </div>
    </View>
  );
};

export default _7;
