import React from "react";
import styles from './styles.module.scss'

export default function KitProductBlurb(props: {
  kitProducts: {
    title: string,
    id: string,
    descriptionHtml: string,
    options: {
      name: string,
      values: string[]
    }[],
    variants: {
      nodes: {
        price: { amount: string, currencyCode: string },
        selectedOptions: {
          name: string,
          value: string,
        }[]
      }[]
    },
  }[]
}) {
  const products = props.kitProducts
  const listItems = products.map(product => {
    const description = product.descriptionHtml
    return (
      <li key={product.id} className={styles['kit-product-blurb']}>
        <h3>{product.title}</h3>
        <div className={styles['description-html']} dangerouslySetInnerHTML={{ __html: description }}></div>
        {/* {(() => {
          if (product.variants.nodes.length > 1) {
            return (
              <div>
                <h4>
                  Available options
                </h4>
                <p>
                  {
                    product.options.map(option => {
                      return (
                        <>
                          {option.name}: {option.values.join(', ')}
                        </>
                      )
                    })
                  }
                </p>
              </div>
            )
          }
        })()} */}
        <div className={styles['divider']}></div>
      </li>
    )
  })
  
  return (
    <div>
      {listItems}
    </div>
  )
}