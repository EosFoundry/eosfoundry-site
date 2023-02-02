import React from 'react';
// import styled from 'styled-components'
import styles from './styles.module.scss'
import { checkoutKit, getItem, ItemCategory } from '@site/src/utils/relay';


import { shopifyApi, LATEST_API_VERSION, ClientType } from '@shopify/shopify-api';

export default function BuyButton(props: {
  itemCategory: ItemCategory,
  itemHandle: string
}) {
  const [loading, setLoading] = React.useState(true);
  const [quantity, setQuantity] = React.useState(1);
  const [price, setPrice] = React.useState(69);
  const [buyTarget, setBuyTarget] = React.useState({} as any);

  // console.log(styles)

  React.useEffect(() => {
    getItem(props.itemCategory, props.itemHandle)
      .then((product) => {
        setBuyTarget(product)
        setPrice(parseFloat(product.price.amount))
        setLoading(false)
      })
  }, [])

  const redirectToCheckout = () => {
    switch (props.itemCategory) {
      case 'kits': {
        checkoutKit(props.itemHandle, quantity).then(checkout => {
          window.open(checkout.webUrl).focus();
        })
      }
    }
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
          Place Order via Shopify
        </button>
        {/* <p className={styles['total']}>
          Total:
        </p> */}
        <div className={styles['big-price']}>
          CAD {(() => {
            if (loading) {
              return "..."
            } else {
              return quantity * price
            }
          })()}
          <br />
          +shipping*
          <br />
          +tax*
        </div>
        <p className={styles['shipping-text']}>
          * depends on location
        </p>
      </div>

    </div>
  )
}
