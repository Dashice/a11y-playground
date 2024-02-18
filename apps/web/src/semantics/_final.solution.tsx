import { View } from 'ui';

const _10 = () => {
  return (
    <View
      title="Final: Semantics (Quote Block)"
      difficulty={3}
      description="From scratch, create a quote block with the following contents (see below)."
    >
      <div className="max-w-2xl flex flex-col gap-4">
        <blockquote cite="https://news.stanford.edu/2005/06/12/youve-got-find-love-jobs-says/">
          <p>
            "The only way to do great work is to love what you do. If you
            haven't found it yet, keep looking. Don't settle. As with all
            matters of the heart, you'll know when you find it."
          </p>
          <footer>
            Quote by Steve Jobs at{' '}
            <cite>2005 Stanford Commencement Address</cite>
            {', '}
            <time dateTime="2005-06-12">June 12, 2005</time>
          </footer>
        </blockquote>
      </div>
    </View>
  );
};

export default _10;
