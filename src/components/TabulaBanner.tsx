import React from 'react';
import classnames from 'classnames';

import FullWidth from './FullWidth';
import stacks from '../lib/stacks.module.css';

export default function TabulaBanner() {
  return (
    <FullWidth>
      <div
        style={{
          height: 450,
          width: '100%',
          overflow: 'hidden',
          backgroundImage: 'url(/images/tabula/DesktopDublin.jpg)',
          objectFit: 'cover',
        }}
      >
        <div
          className={classnames(stacks.hStack, stacks.centered)}
          style={{ position: 'relative', top: 125 }}
        >
          <img
            src="/images/tabula/Hero.png"
            width={1485 * 0.2}
            height={808 * 0.2}
          />
        </div>

        <div
          className={classnames(stacks.hStack, stacks.centered)}
          style={{ position: 'relative', top: 200 }}
        >
          <img
            src="/images/tabula/BlankDocument.gif"
            width={1677 * 0.4}
            height={1028 * 0.4}
          />
        </div>
      </div>
    </FullWidth>
  );
}
