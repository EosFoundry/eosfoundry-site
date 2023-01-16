import React from 'react';
import KitProductBlurb from '../KitProductBlurb';

export default function KitProductBlurbsList(props: {
  productNodeList: any
}) {
  return (
    <>
      {(
        () => {
          return (
            <KitProductBlurb
              kitProducts={props.productNodeList}
            />
          )
        }
      )()}
    </>
  )
}