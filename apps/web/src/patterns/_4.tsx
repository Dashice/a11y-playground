import Image from 'next/image';
import { View } from 'ui';
import { instakiloPosts as posts } from '../assets/data/instakilo';
import { useState } from 'react';

/** @note DO NOT MODIFY THIS HOOK */
const usePosts = (page: number) => {
  const POSTS_PER_PAGE = 4;

  const end = page * POSTS_PER_PAGE;

  return {
    posts: posts.slice(0, end),
    totalCount: posts.length,
  };
};

const styles = {
  frame:
    'border-slate-500 bg-slate-900 w-[320px] h-[600px] border-4 overflow-y-auto rounded-3xl relative',
  appHeader:
    'h-12 flex items-center justify-center bg-slate-800/80 backdrop-blur-xl w-full text-slate-300 font-serif font-bold text-lg sticky top-0 italic',
  homeBar: 'sticky bottom-2 mx-auto w-28 inset-x-0 rounded-full h-1 bg-white',

  posts: 'flex flex-col gap-8',
  post: 'last:mb-12',
  postBanner: 'flex items-center py-2 gap-4 border-t border-slate-800',
  postProfile: 'w-6 rounded-full overflow-hidden ms-2',
  postAuthor: 'text-slate-300 text-xs',
  postInfo: 'mt-3 flex justify-between items-center',
  postText: 'px-4 text-slate-400 text-xs',

  loadMore:
    'border border-slate-700 bg-slate-800 text-slate-300 active:bg-slate-600 active:duration-0 duration-300 rounded-full mb-12 px-4 py-2 mx-auto w-fit text-xs text-center',
  caughtUp: 'text-slate-300 text-xs text-center mt-4 mb-12',
};

const _4 = () => {
  const [page, setPage] = useState(1);
  const { posts, totalCount } = usePosts(page);

  /** If you are attempting the challenge: Add, edit or remove any code between this line... */

  /** ... and this line. Do as you please; in other words. */

  return (
    <View
      title="4. Patterns (Instakilo)"
      difficulty="secret"
      description="Identify the pattern used in the markup below with APG and add the optimal semantics & ARIA attributes to make it accessible."
      challenge="Make the markup & JavaScript adhere to the APG Guidelines for full accessibility compliance."
    >
      <div className={styles.frame}>
        <header className={styles.appHeader}>Instakilo</header>

        {/** Modify the code between this line... */}

        <div className={styles.posts}>
          {posts.map((item) => (
            <div key={item.id} className={styles.post}>
              <div className={styles.postBanner}>
                <Image {...item.profile} className={styles.postProfile} />
                <p className={styles.postAuthor}>{item.author}</p>
              </div>

              <Image {...item.image} />

              <div className={styles.postInfo}>
                <p className={styles.postText}>{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        {posts.length < totalCount && (
          <div
            className={styles.loadMore}
            onClick={() => setPage((prev) => prev + 1)}
          >
            Load more
          </div>
        )}

        {/** ... and this line. */}

        {posts.length >= totalCount && (
          <div className={styles.caughtUp}>You're all caught up! 🎉</div>
        )}

        <div className={styles.homeBar} />
      </div>
    </View>
  );
};

export default _4;
