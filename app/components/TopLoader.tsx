import React from 'react';

import NextTopLoader from 'nextjs-toploader';

export default function TopLoader() {
  return (
    <>
      <NextTopLoader
        color="#ff74b1"
        initialPosition={0.08}
        crawlSpeed={200}
        height={3}
        crawl={true}
        showSpinner={false}
        easing="easeIn"
        speed={200}
        shadow="0 0 10px #303030, 0 0 5px #303030"
      />
    </>
  );
}
