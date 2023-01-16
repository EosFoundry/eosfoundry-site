import React from 'react';
// import styled from 'styled-components'
import styles from './styles.module.scss'


import { shopifyApi, LATEST_API_VERSION, ClientType } from '@shopify/shopify-api';
import { getShopify } from '../../utils/shopifyLoader';

export default function ShopifyBuyButton() {
  const [loading, setLoading] = React.useState(true);
  const [quantity, setQuantity] = React.useState(1);
  const [price, setPrice] = React.useState(69);
  const [shopify, setShopify] = React.useState({
    client: {} as any,
    checkout: {} as any,
    makeShiftAlpha: {} as any,
  });

  // console.log(styles)

  React.useEffect(() => {
    getShopify()
      .then((s) => {
        // console.log('returned:')
        // console.log(s);
        let cl = s.client;
        let ch = s.checkout; // wacky local variable shenanigans
        let mksft = s.items['makeshift-alpha'];
        setShopify({
          client: cl,
          checkout: ch,
          makeShiftAlpha: mksft,
        })
        setLoading(false);
      }).catch((e) => {
        console.log(e);
      });
  }, [])

  const redirectToCheckout = () => {
    setLoading(true);
    shopify.client.checkout.addLineItems(shopify.checkout.id, [
      {
        variantId: shopify.makeShiftAlpha.id,
        quantity: quantity,
      }
    ]).then((updatedCheckout) => {
      // window.open(updatedCheckout.webUrl);
      window.location.href = updatedCheckout.webUrl;

    }).catch((e) => {
      console.log(e);
    }).finally(() => {
      setLoading(false);
    })
  };


  return (
    <div className='container'>
      <div className={styles['buy-wrapper']}>
        <div className={styles['num-field-wrapper']}>
          <button className={styles['num-field-btn-decrement']}
            onClick={() => {
              let q = quantity;
              quantity === 1 ? q : q = quantity - 1;
              setQuantity(q);
            }}
          > - </button>
          <input
            className={styles['num-field']}
            type="number" placeholder={'1'}
            onChange={(e) => setQuantity(parseInt(e.target.value) || quantity)}
            value={quantity}
            min={1}
            max={5}
          ></input>
          <button className={styles['num-field-btn-increment']}

            // 'num-field-btn increment'
            onClick={() => {
              let q = quantity;
              quantity === 5 ? q : q = quantity + 1;
              setQuantity(q)
            }}
          > + </button>
        </div>
        <button
          className={styles['buy-button']}
          disabled={loading}
          onClick={redirectToCheckout}
        >
          Place Order
        </button>
        <p className={styles['total']}>
          Total:
        </p>
        <div className={styles['big-price']}>
          CAD {(() => {
            if (shopify.makeShiftAlpha.price === undefined) {
              return "..."
            } else {
              return quantity * shopify.makeShiftAlpha.price.amount
            }
          })()}
          <br />
          +shipping *
          <br />
          +tax *
        </div>
        <p className={styles['shipping-text']}>
          * depends on location
        </p>
      </div>

    </div>
  )
}