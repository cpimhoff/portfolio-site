import React, { ReactNode } from 'react';
import classnames from 'classnames';

import stacks from '../lib/stacks.module.css';
import styles from './ProjectHeader.module.css';
import projectStyles from './ProjectItem.module.css';

type Props = {
  children: ReactNode;
  icon?: ReactNode;
};
export default function ProjectHeader({ children, icon = '' }: Props) {
  return (
    <div
      className={classnames(projectStyles.projectItem, styles.projectHeader)}
    >
      {/* Honestly, I like it more as just ... nothing ... just whitespace */}
      {/* <b>{children}</b> */}
    </div>
  );
}
