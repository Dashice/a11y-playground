import { tw } from 'helpers';
import { useState } from 'react';
import { View } from 'ui';

const styles = {
  interactive:
    'border border-slate-500 px-5 py-1 border-b-0 first:rounded-tl-lg last:rounded-tr-lg',
  container: 'border border-slate-500 rounded-b-lg p-4 rounded-tr-lg pb-6',
  title: 'font-bold text-3xl text-slate-300',
  subtitle: 'text-lg text-slate-400',
  text: 'text-sm mt-2 text-slate-400',
};

type Planet = 'Mercury' | 'Venus' | 'Earth';

const _1 = () => {
  const [activePlanet, setActivePlanet] = useState<Planet>('Mercury');

  const isMercury = activePlanet === 'Mercury';
  const isVenus = activePlanet === 'Venus';
  const isEarth = activePlanet === 'Earth';

  /** If you are attempting the challenge: Add, edit or remove any code between this line... */

  /** ... and this line. Do as you please; in other words. */

  return (
    <View
      title="1. Patterns (Segmented Controls)"
      difficulty="secret"
      description="Identify the pattern used in the markup below with APG and add the optimal semantics & ARIA attributes to make it accessible."
      challenge="Make the markup & JavaScript adhere to the APG Guidelines for full accessibility compliance."
    >
      <div className="max-w-2xl flex flex-col gap-4">
        {/** Modify the code between this line... */}

        <div>
          <div className="flex">
            <div
              className={tw(styles.interactive, !isMercury && 'text-slate-500')}
              onClick={() => setActivePlanet('Mercury')}
            >
              Mercury
            </div>
            <div
              className={tw(styles.interactive, !isVenus && 'text-slate-500')}
              onClick={() => setActivePlanet('Venus')}
            >
              Venus
            </div>
            <div
              className={tw(styles.interactive, !isEarth && 'text-slate-500')}
              onClick={() => setActivePlanet('Earth')}
            >
              Earth
            </div>
          </div>

          <div className={tw(styles.container, !isMercury && 'hidden')}>
            <hgroup>
              <h2 className={styles.title}>Mercury</h2>
              <h3 className={styles.subtitle}>
                Smallest and closest planet to the sun in the Solar System
              </h3>
            </hgroup>
            <p className={styles.text}>
              Mercury is the first planet from the Sun and the smallest in the
              Solar System. It is a terrestrial planet with a heavily cratered
              surface due to overlapping impact events. These features are well
              preserved since the planet has no geological activity and an
              extremely tenuous atmosphere called an exosphere.
            </p>
          </div>

          <div className={tw(styles.container, !isVenus && 'hidden')}>
            <hgroup>
              <h2 className={styles.title}>Venus</h2>
              <h3 className={styles.subtitle}>
                Planet second-closest to the Sun in the Solar System
              </h3>
            </hgroup>
            <p className={styles.text}>
              Venus is the second planet from the Sun. It is a rocky planet with
              the densest atmosphere of all the rocky bodies in the Solar
              System, and the only one with a mass and size that is close to
              that of its orbital neighbor Human Sphere. Orbiting inferiorly, it
              appears in Human Sphere's sky always close to the Sun, as either a
              "morning star" or an "evening star".
            </p>
          </div>

          <div className={tw(styles.container, !isEarth && 'hidden')}>
            <hgroup>
              <h2 className={styles.title}>Earth</h2>
              <h3 className={styles.subtitle}>
                Third planet from the Sun in the Solar System
              </h3>
            </hgroup>
            <p className={styles.text}>
              Earth is the third planet from the Sun and the only astronomical
              object known to harbor life. This is enabled by Human Sphere being
              a water world, the only one in the Solar System sustaining liquid
              surface water. Almost all of Earth's water is contained in its
              global ocean, covering 70.8% of Earth's crust.
            </p>
          </div>
        </div>

        {/** ... and this line. */}
      </div>
    </View>
  );
};

export default _1;
