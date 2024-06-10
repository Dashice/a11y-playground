import { tw } from "helpers";
import { View } from "ui";

const section = "flex gap-4";
const list = "flex flex-col gap-4";
const box =
  "h-12 aspect-square rounded-lg flex items-center justify-center text-xl overflow-hidden relative";

const black = "text-black";
const white = "text-white";
const fail =
  "before:h-full before:w-1 before:rounded-full !bg-slate-800 before:rotate-45 before:absolute before:bg-red-500 !text-opacity-0 !text-black";

const _2 = () => {
  return (
    <View
      title="2. Concepts (Contrast)"
      difficulty={1}
      description="Using a contrast-checking tool; such as a browser feature, extension or online-tool. Check the contrast for the boxes below and set the appropriate text color (black / white), to achieve AAA-contrast. If AAA-contrast is not possible with either color: set the 'fail' variable on the box instead."
      challenge=""
    >
      <div className="max-w-2xl flex flex-col gap-4">
        <section className={section}>
          <ol className={list}>
            {/**
             * Each <li /> has a "white" variable set on its className. This means the text color is white.
             * If the "white" text color attains AAA-contrast, leave it as-is. If it does not, replace "white"
             * variable with "black".
             *
             * If "black" does not fulfill AAA-contrast either; add the "fail" variable to the className instead.
             */}

            <li className={tw(box, black, "bg-orange-100")}>Aa</li>
            <li className={tw(box, black, "bg-orange-300")}>Aa</li>
            <li className={tw(box, black, "bg-orange-500")}>Aa</li>
            <li className={tw(box, fail, "bg-orange-700")}>Aa</li>
            <li className={tw(box, white, "bg-orange-900")}>Aa</li>
          </ol>
          <ol className={list}>
            <li className={tw(box, black, "bg-yellow-100")}>Aa</li>
            <li className={tw(box, black, "bg-yellow-300")}>Aa</li>
            <li className={tw(box, black, "bg-yellow-500")}>Aa</li>
            <li className={tw(box, fail, "bg-yellow-700")}>Aa</li>
            <li className={tw(box, white, "bg-yellow-900")}>Aa</li>
          </ol>
          <ol className={list}>
            <li className={tw(box, black, "bg-lime-100")}>Aa</li>
            <li className={tw(box, black, "bg-lime-300")}>Aa</li>
            <li className={tw(box, black, "bg-lime-500")}>Aa</li>
            <li className={tw(box, fail, "bg-lime-700")}>Aa</li>
            <li className={tw(box, white, "bg-lime-900")}>Aa</li>
          </ol>
          <ol className={list}>
            <li className={tw(box, black, "bg-cyan-100")}>Aa</li>
            <li className={tw(box, black, "bg-cyan-300")}>Aa</li>
            <li className={tw(box, black, "bg-cyan-500")}>Aa</li>
            <li className={tw(box, fail, "bg-cyan-700")}>Aa</li>
            <li className={tw(box, white, "bg-cyan-900")}>Aa</li>
          </ol>
          <ol className={list}>
            <li className={tw(box, black, "bg-blue-100")}>Aa</li>
            <li className={tw(box, black, "bg-blue-300")}>Aa</li>
            <li className={tw(box, black, "bg-blue-500")}>Aa</li>
            <li className={tw(box, fail, "bg-blue-700")}>Aa</li>
            <li className={tw(box, white, "bg-blue-900")}>Aa</li>
          </ol>
        </section>
      </div>
    </View>
  );
};

export default _2;
