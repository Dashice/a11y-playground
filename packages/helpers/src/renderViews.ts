import { createElement } from 'react';
import type { ComponentType } from 'react';

type ImportedModules = Record<string, object>;

export const renderViews = (modules: ImportedModules) => {
  if (!modules) return null;

  // Match each block to its component and pass the block data as props.
  const components = Object.values(modules).map((module, index) => {
    return createElement(module as ComponentType<typeof module>, {
      key: index,
    });
  });

  return components;
};
