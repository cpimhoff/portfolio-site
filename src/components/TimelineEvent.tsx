import React, { ReactNode } from 'react';
import Link from 'next/link';
import classnames from 'classnames';

import styles from './TimelineEvent.module.css';
import stacks from '../lib/stacks.module.css';

type Props = {
  icon?: ReactNode;
  title: ReactNode;
  children?: ReactNode;
  href?: string;
};
export default function TimelineEvent({
  icon = '',
  title,
  children,
  href,
}: Props) {
  const WrapperComponent = href ? Link : ({ children: c }) => c;

  return (
    <WrapperComponent href={href}>
      <div
        className={classnames(
          styles.timelineEvent,
          href ? styles.timelineLink : styles.timelineNoLink
        )}
      >
        <div
          className={classnames(
            stacks.hStack,
            stacks.alignCenter,
            stacks.mediumSpacing,
            stacks.wrappable
          )}
        >
          <div className={styles.eventIcon}>{icon}</div>
          <div className={classnames(styles.eventDesc)}>
            <b>{title}</b>
            <p>{children}</p>
          </div>
        </div>
      </div>
    </WrapperComponent>
  );
}
