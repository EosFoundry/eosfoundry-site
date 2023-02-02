import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

/* # Control the MakeShift
* makeshift-ctrl is the officially supported software that
*  */

export default function SoftwarePage() {
  return (
    <Layout>
      <div className='container margin-top--lg margin-bottom--xl'>
        <div className='row'>
          <div className='col col--1'></div>
          <div className='col col--7'>
            <div className='flex flex-col'>
              <h1> makeshift-ctrl </h1>
              <p>
                A control panel to create, save, and edit cues. Eventually an interface to reprogram the makeshift
                without needing to compile and upload firmware.
              </p>
              <p>
                makeshift-ctrl is currently under heavy development so expect things to be rough around
                the edges. Currently, updates need to be manually downloaded from GitHub releases. Auto
                updates are pretty high on the priority list, expected to drop within one or two versions!
              </p>
              <Link className="button button--primary button--lg
                margin-top--lg
              mx-auto justify-self-center self-center"
                href="https://github.com/EosFoundry/makeshift-ctrl/releases">
                Download from GitHub
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
