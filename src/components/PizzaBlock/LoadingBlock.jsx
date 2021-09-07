import React from 'react';
import ContentLoader from 'react-content-loader';

function LoadingBlock() {
  return (
    <ContentLoader
      speed={2}
      width={280}
      height={456}
      viewBox='0 0 280 456'
      backgroundColor='#f3f3f3'
      foregroundColor='#ecebeb'>
      <circle cx='140' cy='140' r='140' />
      <rect x='0' y='290' rx='6' ry='6' width='280' height='15' />
      <rect x='0' y='392' rx='6' ry='6' width='89' height='20' />
      <rect x='129' y='392' rx='10' ry='10' width='151' height='20' />
      <rect x='0' y='319' rx='6' ry='6' width='280' height='63' />
    </ContentLoader>
  );
}

export default LoadingBlock;
