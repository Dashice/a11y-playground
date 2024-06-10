import { useOS } from "hooks";
import { useCallback, useEffect, useState } from "react";
import type { MouseEvent } from "react";
import { View } from "ui";

const styles = {
  button:
    "custom border-slate-600 bg-slate-800 rounded-full h-10 flex items-center border relative w-[320px] text-start text-slate-400 px-4",
  shortcut: "bg-slate-700 text-slate-400 rounded-full absolute end-1.5 px-3",
  form: "h-full w-full fixed z-10 inset-0 m-auto overscroll-contain bg-black/20 backdrop-blur-sm flex items-center justify-center",
  window:
    "bg-slate-900 rounded-xl overflow-hidden shadow-2xl max-w-3xl w-full border border-slate-600",
  input:
    "border-b border-slate-600 h-16 w-full bg-slate-800 max-w-none text-2xl font-medium placeholder:text-slate-300",
  list: "ps-4",
  item: "py-3 border-b border-slate-700 text-slate-400 last:border-none",
};

const _3 = () => {
  const os = useOS(); // Returns 'MacOS' or 'Windows' or 'Linux'

  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleOnClickCapture = (event: MouseEvent<HTMLFormElement>) => {
    const target = event.target as HTMLElement;
    if (target.tagName === "FORM") setIsSearchOpen(false);
  };

  /** Most of your solution code will go here between here ... */

  const handleEscapeKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.key !== "Escape") return;

    setIsSearchOpen(false);
    event.preventDefault();
  }, []);

  const handleOpenSearchKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key !== "k") return;

      if (os === "MacOS" && event.metaKey) {
        setIsSearchOpen(!isSearchOpen);
        event.preventDefault();
        return;
      }

      if (["Windows", "Linux"].includes(os || "") && event.ctrlKey) {
        setIsSearchOpen(!isSearchOpen);
        event.preventDefault();
      }
    },
    [os, isSearchOpen],
  );

  useEffect(() => {
    window.addEventListener("keydown", handleEscapeKeyDown);
    window.addEventListener("keydown", handleOpenSearchKeyDown);

    return () => {
      window.removeEventListener("keydown", handleEscapeKeyDown);
      window.removeEventListener("keydown", handleOpenSearchKeyDown);
    };
  }, [isSearchOpen, handleEscapeKeyDown, handleOpenSearchKeyDown]);

  /** ... and here. But you'll likely need to modify the JSX and add a React hook or two here. */

  return (
    <View
      title="3. Concepts (Search shortcut)"
      difficulty={2}
      description="Using ReactJS. Display the search window when a user presses ⌘ K (MacOS) or Ctrl K (Windows / Linux). Pressing Escape should close the search window."
      challenge="Ensure that pressing escape does not trigger any native browser behavior when the search window is open."
    >
      <div className="max-w-2xl flex flex-col gap-4">
        <button
          type="button"
          className={styles.button}
          onClick={() => setIsSearchOpen(!isSearchOpen)}
        >
          Quick search...{" "}
          <span className={styles.shortcut}>
            {os === "MacOS" ? "⌘" : "Ctrl +"} K
          </span>
        </button>

        {isSearchOpen && (
          <form
            className={styles.form}
            onClickCapture={handleOnClickCapture}
            onSubmit={() => setIsSearchOpen(false)}
          >
            <div className={styles.window}>
              <input
                type="text"
                placeholder="Search your next adventure..."
                autoFocus
                className={styles.input}
              />
              <ul className={styles.list}>
                <li className={styles.item}>
                  ★ Flights from ARN to cheap EU countries
                </li>
                <li className={styles.item}>
                  ★ Land transportation around Portugal over 3-days
                </li>
                <li className={styles.item}>
                  ☆ 4-night hiking trip in the Himalayas
                </li>
                <li className={styles.item}>
                  ☆ Taxi from 10024 Ashton Ave. Starbucks to MoMA Museum
                </li>
                <li className={styles.item}>
                  ☆ Dinner for three tonight in Paris
                </li>
              </ul>
            </div>
          </form>
        )}
      </div>
    </View>
  );
};

export default _3;
