import React from 'react';
import classnames from 'classnames';

import styles from './CharlieIcon.module.css';

const BASE_HEIGHT = 125;
const ASPECT_RATIO = 1.0;

type Props = {
  scale?: number;
  isBordered?: boolean;
  className?: string;
};
export default function CharlieIcon({
  scale = 1,
  isBordered = false,
  className,
}: Props) {
  const height = scale * BASE_HEIGHT;
  const width = height * ASPECT_RATIO;

  return (
    <div
      style={{ height, width }}
      className={classnames(
        styles.circleCrop,
        isBordered && styles.bordered,
        className
      )}
    >
      <img src="/images/charlie.jpg" width={width} height={height} />
    </div>
  );
}
