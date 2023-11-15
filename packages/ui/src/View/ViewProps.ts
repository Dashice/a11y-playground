import type { ReactNode } from 'react';

export type ViewProps = {
  title: string;
  description: string;
  challenge?: string;
  difficulty: 1 | 2 | 3 | 'secret';
  children: ReactNode;
};
