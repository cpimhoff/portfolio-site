import React, { ReactNode } from 'react';
import classnames from 'classnames';
import { GitCommit } from 'react-feather';

import styles from './TimelineDate.module.css';
import stacks from '../lib/stacks.module.css';

type Props = {
  children: ReactNode;
};
export default function TimelineDate({ children }: Props) {
  return (
    <div
      className={classnames(
        styles.timelineDate,
        stacks.hStack,
        stacks.alignCenter
      )}
    >
      <GitCommit />
      {children}
    </div>
  );
}
