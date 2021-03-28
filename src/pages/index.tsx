import React from 'react';
import classnames from 'classnames';
import { Phone, Mail, GitHub, Star, Briefcase } from 'react-feather';
import Link from 'next/link';

import styles from './index.module.css';
import stacks from '../lib/stacks';
import CharlieIcon from '../components/CharlieIcon';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={classnames(stacks.hStack, stacks.alignCenter)}>
          <CharlieIcon />
          <div>
            <h1 className={styles.title}>Charlie Imhoff</h1>
            <p className={styles.subtitle}>
              Senior Software Engineer at{' '}
              <a href="https://flatiron.com">Flatiron Health</a>
            </p>

            <ul className={styles.contact}>
              <a href="tel:6032904105">
                <li>
                  <Phone /> <span>(603) 290-4105</span>
                </li>
              </a>
              <a href="mailto:cpimhoff@gmail.com">
                <li>
                  <Mail /> <span>cpimhoff@gmail.com</span>
                </li>
              </a>
              <a href="https://github.com/cpimhoff/">
                <li>
                  <GitHub /> <span>cpimhoff</span>
                </li>
              </a>
            </ul>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />

      <div className={stacks.hStack}>
        <Link href="/projects">
          <div className={classnames(stacks.vStack, stacks.alignCenter)}>
            <Star />
            <b>Projects</b>
          </div>
        </Link>

        <Link href="/resume">
          <div className={classnames(stacks.vStack, stacks.alignCenter)}>
            <Briefcase />
            <b>Resume</b>
          </div>
        </Link>
      </div>
    </div>
  );
}
