# a11y-playground

A repository with exercises to practice HTML5 Semantics, ARIA-related concepts and more.
This repository is built using React / TypeScript / TailwindCSS / NEXT.js / TurboRepo.

## Installing

After cloning the repository to your computer. Ensure `pnpm` is installed. This can be
done via `npm` or `brew` via the commands:

- `npm install -g pnpm`
- `brew install pnpm`

Next, `cd` into cloned directory `a11y-playground`.

Run `pnpm install` to download all packages associated with the project.

## Develop

To run the project locally, run the command:
`pnpm dev`

This will start the project on your machine; and you will be able to access it under
`localhost:3000`. Please note that the PORT 3000 may already be used on your machine;
in that case, please see the terminal output. It will tell you which port the app has
started on.

## How do I work with the exercises?

Open the running application in your browser at default `localhost:3000`.

The header of the site displays a navigation. Each item in the navigation contains
a set of challenges, ranging in difficulty, with instructions on what to do in code
to successfully complete them. The name of each navigation item is also the name of a
folder located in `/apps/web/src/[navigation-item-name]`.

Inside each of these folder are `.tsx` files, labelled chronologically to how they are
displayed on the site; meaning `_1.tsx` is the first challenge in `xyz` folder.
