import React from 'react';
import Image from 'next/Image';
import classnames from 'classnames';

import FullWidth from './FullWidth';
import stacks from '../lib/stacks.module.css';

export default function TabulaBanner() {
  return (
    <FullWidth>
      <div style={{ height: 450, overflow: 'hidden' }}>
        <Image
          src="/images/tabula/DesktopDublin.jpg"
          layout="fill"
          objectFit="cover"
        />

        <div
          className={classnames(stacks.hStack, stacks.centered)}
          style={{ position: 'relative', top: 125 }}
        >
          <Image
            src="/images/tabula/Hero.png"
            width={1485 * 0.2}
            height={808 * 0.2}
          />
        </div>

        <div
          className={classnames(stacks.hStack, stacks.centered)}
          style={{ position: 'relative', top: 200 }}
        >
          <Image
            src="/images/tabula/BlankDocument.gif"
            width={1677 * 0.4}
            height={1028 * 0.4}
          />
        </div>
      </div>
    </FullWidth>
  );
}
