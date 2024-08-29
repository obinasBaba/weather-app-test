import { siteConfig } from '@/config/site.config';
// global-styles
import '@global/index.scss';

import React from 'react';
import Layout from 'src/layout';

import TanStackQueryProvider from '@/shared/providers/tanstack-query-provider';
import ThemeProvider from '@/theme/theme-provider';

export const metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      dir="ltr"
      // required this one for next-themes, remove it if you are not using next-theme
      suppressHydrationWarning
    >
      <body
        // to prevent any warning that is caused by third party extensions like Grammarly
        suppressHydrationWarning
      >
        <TanStackQueryProvider>
          <ThemeProvider>
            <Layout>{children}</Layout>
          </ThemeProvider>
        </TanStackQueryProvider>
      </body>
    </html>
  );
}
