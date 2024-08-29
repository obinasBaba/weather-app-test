'use client';

import React from 'react';

import Bg from '@/public/cloud.jpg';

const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <div
      // set background image
      style={{
        backgroundImage: `url(${Bg.src})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100vw',
      }}
    >
      {children}
    </div>
  );
};

export default Layout;
