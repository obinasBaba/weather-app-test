import { type Metadata } from 'next';

import logoImg from '@/public/logo.svg';
import { type OpenGraph } from 'next/dist/lib/metadata/types/opengraph-types';

enum MODE {
  DARK = 'dark',
  LIGHT = 'light',
}

export const siteConfig = {
  title: 'Travel AdvisorOS - AdvisorOS',
  description: 'AdvisorOS - dashboard for travel advisors',
  logo: logoImg,
  icon: logoImg,
  mode: MODE.DARK,
};

export const metaObject = (
  title?: string,
  openGraph?: OpenGraph,
  description: string = siteConfig.description
): Metadata => {
  return {
    title: title ? `${title} - AdvisorOS` : siteConfig.title,
    description,
    openGraph: openGraph ?? {
      title: title ? `${title} - AdvisorOS` : title,
      description,
      url: 'https://AdvisorOS.net',
      siteName: 'AdvisorOS',
      images: {
        url: 'https://s3.amazonaws.com/redqteam.com/isomorphic-furyroad/itemdep/isobanner.png',
        width: 1200,
        height: 630,
      },
      locale: 'en_US',
      type: 'website',
    },
  };
};
