import React from 'react';
import { Briefcase } from 'react-feather';

import styles from './index.module.css';
import ProjectItem from '../components/ProjectItem';
import ProjectHeader from '../components/ProjectHeader';

export default function Home() {
  return (
    <div className={styles.container}>
      <div>
        <ProjectHeader>Professional Experience</ProjectHeader>

        <ProjectItem
          icon={<Briefcase />}
          title={'Resume'}
          href="/assets/resume2021.pdf"
        >
          My current professional experience.
        </ProjectItem>

        <ProjectItem
          icon={
            <img src="/images/flatiron/flatiron.png" height={60} width={60} />
          }
          href="/projects/flatiron"
          title="Senior Software Engineer at Flatiron Health"
        >
          Tech lead for data quality on clinical abstraction team.
        </ProjectItem>

        {/*
        TODO:
        - Flatiron as a project
        - Slants as a project
        - Clayta as a project
        - ChunkScript as a project
        - DogGoat ?
        */}

        <ProjectHeader>Independent Projects</ProjectHeader>

        <ProjectItem
          icon={<img src="/images/StoreIcon.png" height={60} width={60} />}
          title="Print Shop"
          href="https://store.cpimhoff.com"
        >
          Online store for my graphic and illustrative designs.
        </ProjectItem>

        <ProjectItem
          icon={<img src="/images/tabula/AppIcon.png" height={60} width={60} />}
          title="Tabula"
          href="/projects/tabula"
        >
          Tabula is a distraction free writing app for macOS and iOS which
          automatically formats your text as you write.
        </ProjectItem>

        <ProjectItem
          icon={<img src="/images/chunk-script.svg" height={60} width={60} />}
          title="ChunkScript"
          href="https://chunkscript.cpimhoff.com"
        >
          A satirical homepage of a fictional programming language.
        </ProjectItem>

        <ProjectItem
          icon={<img src="/images/slants/AppIcon.png" height={60} width={60} />}
          title="Slants"
          href="/projects/slants"
        >
          Slants is a fast paced arcade game for iOS designed to be straight
          forward and challenging.
        </ProjectItem>

        <ProjectItem
          icon={<img src="/images/prairie.png" height={60} width={60} />}
          title="Prairie"
          href="https://cs.carleton.edu/cs_comps/1617/jondich2/final-results/index.html"
        >
          Toolkit for historians to create interactive experiences in Unity.
          Developed for senior project and awarded distinction.
        </ProjectItem>
      </div>
    </div>
  );
}
