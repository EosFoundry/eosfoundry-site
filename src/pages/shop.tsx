import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import ShopifyBuyButton from "@site/src/components/MakeShiftAlphaBuyButton";

export default function Shop() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout>
      <div className='container margin-bottom--xl'>

    <ShopifyBuyButton></ShopifyBuyButton>
      </div>
    </Layout>
  )

}