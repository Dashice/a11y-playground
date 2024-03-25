import { useId } from 'react';
import { View } from 'ui';

const colors = [
  { title: 'Gray', hex: '#808080', url: '/aria' },
  { title: 'Lime', hex: '#00ff00', url: '/aria' },
  { title: 'Brown', hex: '#a52a2a', url: '/aria' },
  { title: 'Chocolate', hex: '#d2691e', url: '/aria' },
  { title: 'Gold', hex: '#ffd700', url: '/aria' },
  { title: 'Hotpink', hex: '#ff69b4', url: '/aria' },
  { title: 'Ivory', hex: '#fffff0', url: '/aria' },
  { title: 'Khaki', hex: '#f0e68c', url: '/aria' },
];

const _1 = () => {
  const cardLabelId = useId();
  const cardDescriptionId = useId();

  const swatchGroupLabelId = useId();
  const swatchLabelId = useId();

  return (
    <View
      title="1. ARIA (Labelling)"
      difficulty={2}
      description="Copy the markup into the empty <div /> below, then try and give each container element appropriate labels / descriptions based on the content inside of them."
      challenge="The last container element maps over some items in a list, give these items a unique id-attribute and set them up to use appropriate labels / descriptions based on these ids."
    >
      <div className="max-w-2xl flex flex-col gap-4">
        <article>
          <div className="aspect-video max-w-[320px] mb-2 rounded-lg bg-gray-800 border-gray-600 border" />
          <div className="flex items-center justify-content gap-4">
            <h2 className="truncate flex-1">California Dream Sweater</h2>
            <button className="font-bold px-2 bg-gray-800 py-0 rounded-md w-fit">
              Add +
            </button>
          </div>
          <div className="flex items-center text-sm justify-between">
            <p>From 349kr</p>
            <p className="text-red-400">Only 3 left!</p>
          </div>
        </article>

        <div className="bg-gray-700 w-full h-px my-4" />

        <aside>
          <h2 className="text-xl font-bold mb-6">Shop Paints</h2>
          <div className="grid grid-cols-4 gap-4">
            {colors.map((color, index) => (
              <article
                key={index}
                className="w-10 h-10 rounded-full contrast-75 saturate-75"
                style={{ backgroundColor: color.hex }}
              >
                <span className="sr-only">{color.title}</span>
              </article>
            ))}
          </div>
        </aside>
      </div>

      <div className="max-w-2xl flex flex-col gap-4">
        <article
          aria-labelledby={cardLabelId}
          aria-describedby={cardDescriptionId}
        >
          <div className="aspect-video max-w-[320px] mb-2 rounded-lg bg-gray-800 border-gray-600 border" />
          <div className="flex items-center justify-content gap-4">
            <h2 id={cardLabelId} className="truncate flex-1">
              California Dream Sweater
            </h2>
            <button className="font-bold px-2 bg-gray-800 py-0 rounded-md w-fit">
              Add +
            </button>
          </div>
          <div className="flex items-center text-sm justify-between">
            <p id={cardDescriptionId}>From 349kr</p>
            <p className="text-red-400">Only 3 left!</p>
          </div>
        </article>

        <div className="bg-gray-700 w-full h-px my-4" />

        <aside aria-labelledby={swatchGroupLabelId}>
          <h2 id={swatchGroupLabelId} className="text-xl font-bold mb-6">
            Shop Paints
          </h2>
          <div className="grid grid-cols-4 gap-4">
            {colors.map((color, index) => (
              <article
                key={index}
                className="w-10 h-10 rounded-full contrast-75 saturate-75"
                style={{ backgroundColor: color.hex }}
                aria-labelledby={`${swatchLabelId}-${index + 1}`}
              >
                <span id={`${swatchLabelId}-${index + 1}`} className="sr-only">
                  {color.title}
                </span>
              </article>
            ))}
          </div>
        </aside>
      </div>
    </View>
  );
};

export default _1;
