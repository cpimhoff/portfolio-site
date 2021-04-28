import React from 'react';
import Image from 'next/Image';
import { Briefcase } from 'react-feather';

import styles from './index.module.css';
import TimelineEvent from '../components/TimelineEvent';
import TimelineDate from '../components/TimelineDate';

export default function Home() {
  return (
    <div className={styles.container}>
      <div>
        <TimelineEvent
          icon={<Briefcase />}
          title={'Resume'}
          href="/assets/resume2021.pdf"
        >
          My current professional experience.
        </TimelineEvent>

        {/*
        TODO:
        - Flatiron as a project
        - Slants as a project
        - Clayta as a project
        - ChunkScript as a project
        - DogGoat ?
        */}

        <TimelineEvent
          icon={<Image src="/images/StoreIcon.png" height={100} width={100} />}
          title="Print Shop"
          href="https://store.cpimhoff.com"
        >
          Online store for my graphic and illustrative designs.
        </TimelineEvent>

        <TimelineEvent
          title={
            <>
              Senior Software Engineer at{' '}
              <a
                href="https://flatiron.com"
                style={{ display: 'inline-block' }}
              >
                Flatiron Health
              </a>
            </>
          }
        />

        <TimelineEvent
          icon={
            <Image src="/images/tabula/AppIcon.png" height={100} width={100} />
          }
          title="Tabula"
          href="/projects/tabula"
        >
          Tabula is a distraction free writing app for macOS and iOS which
          automatically formats your text as you write.
        </TimelineEvent>

        <TimelineEvent
          icon={
            <Image src="/images/slants/AppIcon.png" height={100} width={100} />
          }
          title="Slants"
          href="/projects/slants"
        >
          Slants is a fast paced arcade game for iOS designed to be straight
          forward and challenging.
        </TimelineEvent>

        <TimelineEvent title={<>Short-lived stand up comedy career</>} />

        <TimelineEvent
          title={
            <>
              Graduation from{' '}
              <a href="https://carleton.edu">Carleton College</a>
            </>
          }
        />

        <TimelineEvent
          icon={<Image src="/images/prairie.png" height={100} width={100} />}
          title="Prairie"
          href="https://cs.carleton.edu/cs_comps/1617/jondich2/final-results/index.html"
        >
          Toolkit for historians to create interactive experiences in Unity.
          Developed for senior project and awarded distinction.
        </TimelineEvent>
      </div>
    </div>
  );
}
