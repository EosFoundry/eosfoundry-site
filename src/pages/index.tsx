import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';
import { setHostname } from '../utils/relay';

import MakeShift3 from '/img/MakeShift4.jpg'

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero shadow-lw', styles.heroBanner)}>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`${siteConfig.title}`} >
      <main>
        <div className='container mt-8 mb-16'>
          <div className='row'>
            <div className='col col--8 col--offset-2'>
              <img
                className='border-0 border-solid rounded-xl
                outline outline-2 outline-stone-600'
                src='/img/MakeShift5.jpg' />
              <div className='row ml-0 mt-6'>
                <img className='h-14 mr-6' src='/img/MakeShiftLogo.png' />
                <h1 className="hero__title"> get sh*ft done</h1>
              </div>
              <p>
                The MakeShift is a macro system that is entirely hackable from the hardware up to the interface.
              </p>
              <p>
                It aims to open the door for Makers to go even further
                - compressing long tasks down to a single push of a button.
              </p>
            </div>
          </div>
          <div className='container
            margin-top--xl margin-bottom--md
            '>
            <h2 className='text-center text-4xl'>
              QUICK LINKS
            </h2>
            <div className='grid
              grid-cols-1 grid-cols gap-4
              md:grid-cols-3

              sm:mx-5
              lg:mx-36
              xl:mx-48'>
              <div>
                <div className='card'>
                  <div className='card__header'>
                    <h3> Got a MakeShift? </h3>
                  </div>
                  <div className='card__header'>
                    <p>
                      Install the software and play around with the editor!
                    </p>
                  </div>
                  <div className='card__footer'>
                    <Link className="button button--primary button--block text-xl"
                      to="/software/">
                      DOWNLOAD
                    </Link>
                  </div>
                </div>
              </div>
              <div>
                <div className='card'>
                  <div className='card__header'>
                    <h3> Need to know more? </h3>
                  </div>
                  <div className='card__body'>
                    <p>
                      Our documentation is a good place to get started!
                    </p>
                  </div>
                  <div className='card__footer'>
                    <Link className="button button--primary button--block text-xl"
                      to="/docs/overview">
                      OVERVIEW
                    </Link>
                  </div>
                </div>
              </div>
              <div className=''>
                <div className='card'>
                  <div className='card__header'>
                    <h3> Want to help build? </h3>
                  </div>
                  <div className='card__body'>
                    <p>
                      From firmware to software, all our code is on GitHub.
                    </p>
                  </div>
                  <div className='card__footer'>
                    <Link className="button button--primary button--block text-xl"
                      href="https://github.com/EosFoundry/makeshift-ctrl">
                      SOURCE
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
