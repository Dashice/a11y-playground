import { useState } from "react";
import type { KeyboardEvent } from "react";
import { View } from "ui";

const styles = {
  container:
    "flex items-center border rounded-lg border-slate-500 bg-slate-800 overflow-hidden relative",
  label:
    "block relative cursor-pointer border-e border-slate-500 last:border-none w-[150px] h-10",
  input:
    "appearance-none absolute w-full h-full cursor-pointer checked:cursor-default z-10 bg-transparent peer",
  text: "absolute w-full h-full top-0 start-0 text-white flex items-center text-center justify-center peer-checked:bg-slate-500",
};

const _4 = () => {
  const [checked, setChecked] = useState<string>();

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const { currentTarget, key } = event;

    const buttons = Array.from(currentTarget.querySelectorAll("button"));
    if (!buttons.length) return;

    const current = buttons.findIndex((button) => button.tabIndex === 0);
    if (current === -1) return;

    const set = (element: HTMLButtonElement) => {
      element.focus();
      setChecked(element.value);
    };

    const first = () => set(buttons[0]);

    const prev = () => {
      const prevIndex = current === 0 ? buttons.length - 1 : current - 1;
      set(buttons[prevIndex]);
    };

    const next = () => {
      const nextIndex = current === buttons.length - 1 ? 0 : current + 1;
      set(buttons[nextIndex]);
    };

    const last = () => set(buttons[buttons.length - 1]);

    const methods: Record<string, () => void> = {
      ArrowUp: prev,
      ArrowRight: next,
      ArrowDown: next,
      ArrowLeft: prev,
      Home: first,
      End: last,
    };

    if (!methods[key]) return;
    event.preventDefault();
    methods[key]();
  };

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
        <div
          role="toolbar"
          className={styles.container}
          onKeyDown={handleKeyDown}
        >
          <button
            tabIndex={!checked || checked === "tiramisu" ? 0 : -1}
            value="tiramisu"
            onClick={(e) => setChecked(e.currentTarget.value)}
            className={`${styles.label} ${
              checked === "tiramisu" ? "bg-slate-500" : ""
            }`}
          >
            Tiramisu
          </button>

          <button
            tabIndex={!checked || checked === "velvet" ? 0 : -1}
            value="velvet"
            onClick={(e) => setChecked(e.currentTarget.value)}
            className={`${styles.label} ${
              checked === "velvet" ? "bg-slate-500" : ""
            }`}
          >
            Red Velvet
          </button>

          <button
            tabIndex={!checked || checked === "creme" ? 0 : -1}
            value="creme"
            onClick={(e) => setChecked(e.currentTarget.value)}
            className={`${styles.label} ${
              checked === "creme" ? "bg-slate-500" : ""
            }`}
          >
            Crème Brûlée
          </button>
        </div>
      </div>
    </View>
  );
};

export default _4;
