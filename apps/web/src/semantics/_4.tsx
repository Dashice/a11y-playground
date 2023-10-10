import { View } from 'ui';

const _4 = () => {
  return (
    <View
      title="4. Semantics (Image + Text)"
      difficulty={1}
      description="Copy the markup into the empty <div /> and fix any semantic oversights whilst preserving the styles."
    >
      <div className="max-w-2xl flex flex-col gap-4">
        <div className="space-y-4 bg-gray-800 rounded-lg p-4">
          <img
            src="/jelly.jpg"
            className="object-cover max-w-md aspect-[4/3] rounded-md"
          />
          <p>
            <a
              href="https://en.wikipedia.org/wiki/Jellyfish"
              className="underline"
              target="_blank"
            >
              Spotted jellies
            </a>{' '}
            swimming in a Tokyo aquarium
          </p>
        </div>
      </div>

      <div className="max-w-2xl flex flex-col gap-4">
        {/** Your solution goes here. */}
      </div>
    </View>
  );
};

export default _4;
