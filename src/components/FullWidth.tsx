import React, { ReactNode } from 'react';
import classnames from 'classnames';

import styles from './FullWidth.module.css';

type Props = {
  children: ReactNode;
  centered?: boolean;
};
export default function FullWidth({ children, centered = true }: Props) {
  return (
    <div className={styles.fullWidth}>
      <div className={classnames(centered && styles.centeredContent)}>
        {children}
      </div>
    </div>
  );
}
