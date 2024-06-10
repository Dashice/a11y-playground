import { useEffect, useLayoutEffect, useRef, useState } from "react";
import type { ButtonHTMLAttributes, HTMLAttributes, RefObject } from "react";
import { tw } from "helpers";
import { View } from "ui";

const buttonBase =
  "aspect-square col-span-2 text-2xl border w-10 duration-300 scale-100";

const inactive = "!bg-slate-800 !border-slate-700 !text-slate-400 !scale-75";

const button = {
  outer: tw(buttonBase, "focus:bg-cyan-700 border-cyan-800 text-cyan-400"),
  inner: tw(buttonBase, "focus:bg-rose-700 border-rose-800 text-rose-400"),
};

const _9 = () => {
  // This state will likely be of use to you...
  const [isActive, setIsActive] = useState(false);

  const outerAttributes: ButtonHTMLAttributes<HTMLButtonElement> = {
    className: tw(button.outer, isActive && inactive),
    onClick: () => setIsActive(true),
  };

  const perimeterAttributes: HTMLAttributes<HTMLDivElement> = {
    className: tw(
      "border-t border-b py-2 col-span-full h-14 gap-2 flex duration-300",
      isActive ? "border-rose-800" : "border-slate-700",
    ),
  };

  const innerAttributes: ButtonHTMLAttributes<HTMLButtonElement> = {
    className: tw(button.inner, !isActive && inactive),
    onClick: () => setIsActive(false),
  };

  /** Your solution should go somewhere between here ... */

  const ref = useRef<HTMLDivElement>(null);

  const useIsomorphicEffect =
    typeof window === "undefined" ? useEffect : useLayoutEffect;

  const useReturnFocus = (when: boolean) => {
    useIsomorphicEffect(() => {
      if (!when) return;

      const activeElement = document.activeElement;

      return () => {
        if (!activeElement || !(activeElement instanceof HTMLElement)) return;
        requestAnimationFrame(() => activeElement.focus());
      };
    }, [when]);
  };

  const useFocusTrap = (when: boolean, area: RefObject<Element>) => {
    const previousActiveElement = useRef<Element | null>(null);

    useEffect(() => {
      if (!when || !area.current) return;

      const boundary = area.current;
      const buttons = boundary.querySelectorAll("button");

      const first = buttons[0];
      const last = buttons[buttons.length - 1];

      first.focus();

      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key !== "Tab") return;

        const activeElement = document.activeElement;

        if (event.shiftKey && activeElement === first) {
          event.preventDefault();
          last.focus();
          return;
        }
        if (!event.shiftKey && activeElement === last) {
          event.preventDefault();
          first.focus();
          return;
        }
      };

      const handleKeyUp = (event: KeyboardEvent) => {
        if (event.key !== "Tab") return;
        const activeElement = document.activeElement;
        previousActiveElement.current = activeElement;
      };

      const handleMouseUp = (event: MouseEvent) => {
        if (boundary.contains(event.target as Node)) return;

        const previous = previousActiveElement.current;
        if (previous instanceof HTMLElement) previous.focus();
      };

      boundary.addEventListener("keydown", handleKeyDown);
      boundary.addEventListener("keyup", handleKeyUp);
      window.addEventListener("mouseup", handleMouseUp);

      return () => {
        boundary.removeEventListener("keydown", handleKeyDown);
        boundary.removeEventListener("keyup", handleKeyUp);
        window.removeEventListener("mouseup", handleMouseUp);
      };
    }, [when, area]);
  };

  useReturnFocus(isActive);
  useFocusTrap(isActive, ref);

  /** ... and here */

  return (
    <View
      title="9. Concepts (Trap Focus)"
      difficulty={3}
      description="Create a focus trap. When you press any arrow button, the center is highlighted in red. Ensure that focus is moved to the center area and that keyboard focus never escapes it, unless one of the numbered buttons is pressed. - In such a case, return the focus to the arrow button which activated the focus trap. Use any React API you deem necessary."
      challenge="Think about this. Assume our red perimeter was a modal that was focus-trapped. How would you handle focus-trapping a modal which opened another modal? When would you return focus to the previous modal and the underlying page and how could this work from a programmatic standpoint?"
    >
      <div className="max-w-2xl grid grid-cols-12 gap-2">
        <button {...outerAttributes}>↓</button>
        <button {...outerAttributes}>↓</button>
        <button {...outerAttributes}>↓</button>
        <button {...outerAttributes}>↓</button>
        <button {...outerAttributes}>↓</button>
        <button {...outerAttributes}>↓</button>

        {/** Your solution should go somewhere between here ... */}
        <div ref={ref} {...perimeterAttributes}>
          <button {...innerAttributes}>1</button>
          <button {...innerAttributes}>2</button>
          <button {...innerAttributes}>3</button>
          <button {...innerAttributes}>4</button>
          <button {...innerAttributes}>5</button>
          <button {...innerAttributes}>6</button>
        </div>
        {/** ... and here */}

        <button {...outerAttributes}>↑</button>
        <button {...outerAttributes}>↑</button>
        <button {...outerAttributes}>↑</button>
        <button {...outerAttributes}>↑</button>
        <button {...outerAttributes}>↑</button>
        <button {...outerAttributes}>↑</button>
      </div>
    </View>
  );
};

export default _9;
