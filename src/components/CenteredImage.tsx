import React from 'react';

import FullWidth from './FullWidth';

type Props = {
  src: string;
  maxWidth: string | number;
};
export default function CenteredImage({ src, maxWidth = '55rem' }: Props) {
  return (
    <FullWidth>
      <div style={{ width: '80%', maxWidth, position: 'relative' }}>
        <img
          src={src}
          style={{
            width: '100%',
            objectFit: 'contain',
          }}
        />
      </div>
    </FullWidth>
  );
}
