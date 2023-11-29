import type { HTMLAttributes, ReactNode, RefObject } from 'react';

export type PortalProps<T> = HTMLAttributes<HTMLDivElement> & {
  to: RefObject<T> | string | null;
  when: boolean;
  children: ReactNode;
};
