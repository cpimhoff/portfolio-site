import React, { ReactNode } from 'react';
import Link from 'next/link';
import classnames from 'classnames';

import styles from './ProjectItem.module.css';
import stacks from '../lib/stacks.module.css';

type Props = {
  icon?: ReactNode;
  title: ReactNode;
  children?: ReactNode;
  href?: string;
};
export default function ProjectItem({
  icon = '',
  title,
  children,
  href,
}: Props) {
  const WrapperComponent = href ? Link : ({ children: c }) => c;

  return (
    <WrapperComponent href={href}>
      <div
        className={classnames(styles.projectItem, href && styles.projectLink)}
      >
        <div
          className={classnames(
            stacks.hStack,
            stacks.alignCenter,
            stacks.mediumSpacing,
            stacks.wrappable
          )}
        >
          <div className={styles.projectIcon}>{icon}</div>
          <div className={classnames(styles.projectDesc)}>
            <b>{title}</b>
            <p>{children}</p>
          </div>
        </div>
      </div>
    </WrapperComponent>
  );
}
