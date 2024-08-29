'use client';

import React from 'react';

import { useAppStore } from '@/config/app-store';
import { ThemeProvider } from 'next-themes';

export default function NextThemeProvider({ children }: React.PropsWithChildren<{}>) {
  const mode = useAppStore((state) => state.theme);

  return (
    <ThemeProvider defaultTheme={mode || 'light'} enableColorScheme={true}>
      {children}
    </ThemeProvider>
  );
}
