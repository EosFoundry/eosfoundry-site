import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import KitProductBlurbsList from '../components/shop/KitProductBlurbsList';
import BuyButton from '../components/shop/BuyButton';
import { getItem } from '../utils/relay';

export default function Shop() {
  const { siteConfig } = useDocusaurusContext();

  const [loading, setLoading] = React.useState(true);
  const [quantity, setQuantity] = React.useState(1);
  const [price, setPrice] = React.useState(69);
  const [buyTarget, setBuyTarget] = React.useState<any>({});

  // console.log(styles)

  React.useEffect(() => {
    getItem('kits', 'makeshift-alpha-kit')
      .then((product) => {
        setBuyTarget(product)
        setPrice(parseFloat(product.price.amount))
        setLoading(false)
      })
  }, [])

  return (
    <Layout>
      <div className='container  margin-top--xl'>
        <div className='row'>
          <div className='col col--2'></div>
          <div className='col col--6'>
            <h1>MakeShift Alpha Kit - Without Teensy</h1>
            <p>
              We really wanted to put a Teensy 4.0 in here.
              However with the numbers we're shipping for Alpha, it just wouldn't work with sourcing
              - everything is on backorder forever.
            </p>
            <p>
              So, we're putting up the kit without the Teensy in the hopes that you'll be able to source a
              Teensy from your local hobby shop or global warehouse corporation,
              likely you'll save a bit on shipping too!
            </p>
          </div>
          <div className='col col--4 margin-top--lg '>
            <BuyButton
              itemCategory='kits'
              itemHandle='makeshift-alpha-kit'
            />
          </div>
        </div>
      </div>
      <div className='container margin-bottom--xl'>
        <div className='row'>
          <div className='col col--2'></div>
          <div className='col col--6'>

            <h2>What's in the Kit?</h2>
            <p>
              The kit contains every single component that we use to construct the pre-built version
              of the MakeShift Alpha, and all the accessories that would be included as well.
              The only thing that will be missing is maybe our fingerprint smudges from assembly
              (though we do give pre-built units a wipe before sending it out).
            </p>
            <p>
              We have included a list with descriptions below for exactly what the kit will
              include.
            </p>
            <div>
              {(() => {
                if (loading === false) {
                  return (
                    <KitProductBlurbsList
                      productNodeList={buyTarget.products.nodes}
                    />
                  )
                }
              })()}
            </div>
          </div>
          <div className='col col--4'></div>
        </div>
      </div>
    </Layout>
  )

}