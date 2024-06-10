import { tw } from "helpers";
import { useId } from "react";
import { View } from "ui";

const linkClasses =
  "bg-cyan-700 text-cyan-100 py-2 px-4 rounded-md active:bg-cyan-500 duration-300 active:duration-0";

const _1 = () => {
  const articleId = useId();
  const footerId = useId();

  return (
    <View
      title="1. Concepts (Skip links)"
      difficulty={1}
      description="Copy the markup into the empty <div /> and ensure that the skip links work as expected."
      challenge="Using either CSS, JS or TailwindCSS, ensure that the skip links are only visible when focused and that they are not occupying any space on the page when not focused. Only one link should be visible at a time."
    >
      <div className="max-w-2xl flex flex-col gap-4">
        <nav className="flex gap-4" aria-label="Skip links">
          <a className={tw(linkClasses, "")}>Skip to Article</a>
          <a className={tw(linkClasses, "")}>Skip to Footer</a>
        </nav>

        <div className="border border-slate-600 rounded-lg overflow-hidden">
          <article className="p-4">
            <hgroup>
              <h2 className="text-3xl font-medium">
                An Amazing Fact About Lobsters
              </h2>
              <h3 className="text-xl font-medium">
                — Not All Lobsters have Claws
              </h3>
            </hgroup>
            <p className="my-4 text-sm text-slate-300">
              There are two kinds of lobsters: clawed lobsters and spiny
              lobsters (or rock lobsters). Clawed lobsters are generally found
              in cold marine waters and include the American lobster, a popular
              variety served at seafood restaurants, especially in New England.
            </p>
            <figure className="max-w-xs w-full">
              <img
                src="/lobbying.jpg"
                alt="A clawless lobster found unda tha sea."
              />
              <figcaption className="text-xs text-slate-300 mt-2">
                Image found online at ThoughtCo, from Getty Images
              </figcaption>
            </figure>
            <p className="my-4 text-sm text-slate-300">
              Spiny lobsters do not have claws. They do, however, have long,
              strong antennae. These lobsters are generally found in warm water
              environments such as the Caribbean and the Mediterranean. As a
              seafood dish, they most often show up on the menu as lobster tail.
            </p>
          </article>

          <footer
            role="contentinfo"
            className="bg-slate-700 py-1 px-4 text-xs text-slate-300"
          >
            Copyright {new Date().getFullYear()} © Seafarer Inc. All rights
            reserved.
          </footer>
        </div>
      </div>

      <div className="max-w-2xl flex flex-col gap-4">
        <nav className="flex gap-4" aria-label="Skip links">
          <a
            href={`#${articleId}`}
            className={tw(linkClasses, "[&:not(:focus)]:sr-only")}
          >
            Skip to Article
          </a>
          <a
            href={`#${footerId}`}
            className={tw(linkClasses, "[&:not(:focus)]:sr-only")}
          >
            Skip to Footer
          </a>
        </nav>

        <div className="border border-slate-600 rounded-lg overflow-hidden">
          <article id={articleId} className="p-4">
            <hgroup>
              <h2 className="text-3xl font-medium">
                An Amazing Fact About Lobsters
              </h2>
              <h3 className="text-xl font-medium">
                — Not All Lobsters have Claws
              </h3>
            </hgroup>
            <p className="my-4 text-sm text-slate-300">
              There are two kinds of lobsters: clawed lobsters and spiny
              lobsters (or rock lobsters). Clawed lobsters are generally found
              in cold marine waters and include the American lobster, a popular
              variety served at seafood restaurants, especially in New England.
            </p>
            <figure className="max-w-xs w-full">
              <img
                src="/lobbying.jpg"
                alt="A clawless lobster found unda tha sea."
              />
              <figcaption className="text-xs text-slate-300 mt-2">
                Image found online at ThoughtCo, from Getty Images
              </figcaption>
            </figure>
            <p className="my-4 text-sm text-slate-300">
              Spiny lobsters do not have claws. They do, however, have long,
              strong antennae. These lobsters are generally found in warm water
              environments such as the Caribbean and the Mediterranean. As a
              seafood dish, they most often show up on the menu as lobster tail.
            </p>
          </article>

          <footer
            id={footerId}
            role="contentinfo"
            className="bg-slate-700 py-1 px-4 text-xs text-slate-300"
          >
            Copyright {new Date().getFullYear()} © Seafarer Inc. All rights
            reserved.
          </footer>
        </div>
      </div>
    </View>
  );
};

export default _1;
