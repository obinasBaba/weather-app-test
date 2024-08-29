/* eslint-disable @typescript-eslint/restrict-plus-operands */
'use client';

import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider as MuiProvider, useTheme as useMuiTheme } from '@mui/material/styles';
import { useServerInsertedHTML } from 'next/navigation';
import React, { useEffect, useLayoutEffect, useState } from 'react';

import { useAppStore } from '@/config/app-store';
import NextThemeProvider from '@/theme/next-theme-provider';
import createMuiTheme from './mui-theme-config';
import { useTheme } from 'next-themes';

// This implementation is from emotion-js
// https://github.com/emotion-js/emotion/issues/2928#issuecomment-1319747902
function MuiThemeProvider({ children }: React.PropsWithChildren) {
  const { theme: nxtTheme, setTheme: setNxtTheme } = useTheme();
  const muiTheme = useMuiTheme();
  const mode = useAppStore((state) => state.theme);
  const fontInter = useAppStore((state) => state.fontInter);

  const [{ cache, flush }] = useState(() => {
    const cache = createCache({ key: 'css', prepend: true });
    cache.compat = true;
    const prevInsert = cache.insert;
    let inserted: string[] = [];
    cache.insert = (...args) => {
      const serialized = args[1];
      if (cache.inserted[serialized.name] === undefined) {
        inserted.push(serialized.name);
      }
      return prevInsert(...args);
    };
    const flush = () => {
      const prevInserted = inserted;
      inserted = [];
      return prevInserted;
    };
    return { cache, flush };
  });

  useServerInsertedHTML(() => {
    const names = flush();
    if (names.length === 0) {
      return null;
    }
    let styles = '';
    for (const name of names) {
      styles += cache.inserted[name];
    }
    return (
      <style
        key={cache.key}
        data-emotion={`${cache.key} ${names.join(' ')}`}
        dangerouslySetInnerHTML={{
          __html: styles,
        }}
      />
    );
  });

  useEffect(() => {
    setNxtTheme(mode || 'light');
  }, [mode]);

  return (
    <>
      <CacheProvider value={cache}>
        <MuiProvider theme={createMuiTheme(muiTheme, mode, fontInter)}>
          <CssBaseline />
          {children}
        </MuiProvider>
      </CacheProvider>
    </>
  );
}

export default function ThemeProvider({ children }: any) {
  return (
    <NextThemeProvider>
      <MuiThemeProvider>{children}</MuiThemeProvider>
    </NextThemeProvider>
  );
}
