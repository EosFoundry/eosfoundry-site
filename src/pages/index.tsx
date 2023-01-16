import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero shadow-lw', styles.heroBanner)}>
      <div className='container'>
        <div className='row'>
          <div className='col col--2'></div>
          <div className='col col--8'>
            <h1 className="hero__title">MakeShift</h1>
            <p className="hero__subtitle">get sh*ft done</p>

          </div>
          <div className='col col--2'></div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <div className='container margin-bottom--xl'>
          <div className='row'>
            <div className='col col--2'></div>
            <div className='col col--8'>
              <p>
                Streamers, Designers, Musicians, Engineers - Makers today use a whole arsenal of software tools to create our works. In doing so, we develop incredibly unique workflows to become faster, and more efficient.
              </p>
              <p>
                The MakeShift aims to open the door for Makers to go even further beyond without making any assumptions about the tools being used - to compress long tasks down to a single push of a button.
              </p>
            <div className={styles.buttons}>
              <Link
                className="button button--primary button--lg"
                to="/docs/">
                Read the Docs
              </Link>
            </div>
            </div>
            <div className='col col--2'></div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
