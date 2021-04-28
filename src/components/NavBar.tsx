import React from 'react';
import Link from 'next/link';
import classnames from 'classnames';
import { Phone, Mail, GitHub } from 'react-feather';

import styles from './NavBar.module.css';
import stacks from '../lib/stacks.module.css';
import CharlieIcon from './CharlieIcon';

export default function NavBar() {
  return (
    <div className={styles.navBar}>
      <div className={styles.navBarContent}>
        <div
          className={classnames(
            stacks.hStack,
            stacks.alignCenter,
            stacks.wrappable,
            stacks.mediumSpacing
          )}
        >
          <div className={styles.name}>
            <h1 className={styles.title}>
              <Link href="/">Charlie Imhoff</Link>
            </h1>
            <p className={styles.subtitle}>
              Senior Software Engineer at{' '}
              <a href="https://flatiron.com">Flatiron Health</a>
            </p>
          </div>

          <CharlieIcon scale={0.5} />

          <ul className={styles.contact}>
            <a href="tel:6032904105">
              <li>
                <Phone />
                <span>(603) 290-4105</span>
              </li>
            </a>
            <a href="mailto:cpimhoff@gmail.com">
              <li>
                <Mail />
                <span>cpimhoff@gmail.com</span>
              </li>
            </a>
            <a href="https://github.com/cpimhoff/">
              <li>
                <GitHub />
                <span>cpimhoff</span>
              </li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
}
