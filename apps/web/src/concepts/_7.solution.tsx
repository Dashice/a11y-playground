import { tw } from "helpers";
import { useEffect, useState } from "react";
import { View } from "ui";

type State = boolean | undefined;

const _7 = () => {
  /** These three states should be set dynamically to either `true` or `false`. */
  const [prefersHighContrast, setPrefersHighContrast] = useState<State>();
  const [prefersDarkMode, setPrefersDarkMode] = useState<State>();
  const [prefersReducedMotion, setPrefersReducedMotion] = useState<State>();

  useEffect(() => {
    const mediaQueries = {
      darkMode: window.matchMedia("(prefers-color-scheme: dark)"),
      highContrast: window.matchMedia("(prefers-contrast: more)"),
      reducedMotion: window.matchMedia("(prefers-reduced-motion: reduce)"),
    };

    const updatePreferences = () => {
      setPrefersDarkMode(mediaQueries.darkMode.matches);
      setPrefersHighContrast(mediaQueries.highContrast.matches);
      setPrefersReducedMotion(mediaQueries.reducedMotion.matches);
    };

    updatePreferences();

    Object.values(mediaQueries).forEach((media) => {
      media.addEventListener("change", updatePreferences);
    });

    return () => {
      Object.values(mediaQueries).forEach((media) => {
        media.removeEventListener("change", updatePreferences);
      });
    };
  }, []);

  return (
    <View
      title="7. Concepts (User Preferences)"
      difficulty={1}
      description="Below you will find three smaller challenges, each telling you what should happen to the element when some operating system level feature is enabled or disabled. Figure out how to detect these user preferences inside the provided 'useEffect' and set the states appropriately."
    >
      <div className="max-w-2xl flex flex-col gap-4">
        <p
          className={tw(
            prefersHighContrast && "text-white",
            !prefersHighContrast && "text-slate-700",
          )}
        >
          When high contrast is preferred; make my text color "text-slate-700".
        </p>

        <ul>
          <li className={tw(prefersDarkMode && "bg-slate-700 text-slate-300")}>
            Night mode: I have Tailwind classes "bg-slate-700 text-slate-300".
          </li>
          <li className={tw(!prefersDarkMode && "bg-slate-300 text-slate-700")}>
            Light mode: I have Tailwind classes "bg-slate-300 text-slate-700".
          </li>
        </ul>

        <p className={tw(!prefersReducedMotion && "animate-pulse")}>
          When reduced motion is preferred, stop my animation.
        </p>
      </div>
    </View>
  );
};

export default _7;
