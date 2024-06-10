import { tw } from "helpers";
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

const _6 = () => {
  const [isRTL, setIsRTL] = useState(true);

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
      title="6. Concepts (Radio Buttons & RTL — Continued)"
      difficulty={2}
      description="Using the solution from exercise '4. Concepts (Radio Buttons)'. Ensure that the keyboard navigation logic is correct when the page is viewed in RTL direction, whilst simultaneously working as it previously did in LTR direction."
    >
      <div className="max-w-2xl flex flex-col gap-4">
        <button
          type="button"
          className={tw(
            "custom flex items-center justify-center w-72 before:absolute after:absolute relative border mx-auto h-10 rounded-full",
            isRTL
              ? 'before:content-["←"] before:left-4 border-green-500'
              : 'after:right-4 after:content-["→"] border-blue-500',
          )}
          onClick={() => setIsRTL(!isRTL)}
        >
          {isRTL ? "Right-to-Left" : "Left-to-Right"}
        </button>

        <div
          role="separator"
          className="my-4 h-px w-full max-w-[200px] mx-auto bg-slate-500"
          aria-orientation="horizontal"
        />

        <div dir={isRTL ? "rtl" : "ltr"}>
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
      </div>
    </View>
  );
};

export default _6;
