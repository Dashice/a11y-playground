import { View } from 'ui';

const styles = {
  container:
    'flex items-center border rounded-lg border-slate-500 bg-slate-800 overflow-hidden relative',
  label:
    'block relative cursor-pointer border-e border-slate-500 last:border-none w-[150px] h-10',
  input:
    'appearance-none absolute w-full h-full cursor-pointer checked:cursor-default z-10 bg-transparent peer',
  text: 'absolute w-full h-full top-0 start-0 text-white flex items-center text-center justify-center peer-checked:bg-slate-500',
};

const _4 = () => {
  return (
    <View
      title="4. Concepts (Radio Buttons)"
      difficulty={2}
      description='Below is a set of radio buttons created with <input type="radio" /> elements. Create an exact copy of the radio buttons using standard <button /> elements and ensure they behave the exact same way from a keyboard navigation perspective as the native radio elements. No role / ARIA implementation is needed for this exercise.'
      challenge="If you have a working solution, attempt to implement a 'Roving Tabindex' pattern. This is usually done if the custom radio's represent items in a toolbar."
    >
      <div className="max-w-2xl flex flex-col gap-4">
        <div role="toolbar" className={styles.container}>
          <label className={styles.label}>
            <input
              type="radio"
              name="dessert"
              value="tiramisu"
              className={styles.input}
            />
            <span className={styles.text}>Tiramisu</span>
          </label>
          <label className={styles.label}>
            <input
              type="radio"
              name="dessert"
              value="velvet"
              className={styles.input}
            />
            <span className={styles.text}>Red Velvet</span>
          </label>
          <label className={styles.label}>
            <input
              type="radio"
              name="dessert"
              value="creme"
              className={styles.input}
            />
            <span className={styles.text}>Crème Brûlée</span>
          </label>
        </div>
      </div>

      <div className="max-w-2xl flex flex-col gap-4">
        {/** Your solution goes here. */}
      </div>
    </View>
  );
};

export default _4;
