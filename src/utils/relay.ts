export type ItemCategory = 'products' | 'kits'


const items = {
  kits: {},
  products: {},
}


let hostname = 'https://eosfoundry.dev/relay'
export function setHostname(newHostname:string){
  console.log('butthole')
  newHostname = newHostname
}
export async function getItem(itemCategory: ItemCategory, handle: string) {
  if (typeof items[itemCategory][handle] !== 'undefined') {
    return items[itemCategory][handle]
  }

  const response = await fetch(`${hostname}/${itemCategory}/${handle}`, {
    method: 'GET',
  })

  const data = await response.json()

  console.log(data)

  if (data.itemExists === false
    && data.itemCategory !== 'product') {
    // TODO: handle false
    return false
  }

  items[itemCategory][handle] = data.item
  return data.item
}


export async function checkoutKit(handle: string, quantity: number) {
  if (typeof items.kits[handle] === 'undefined') {
    await getItem('kits', handle)
  }
  if (typeof items.kits[handle] !== 'undefined') {

    const kit = items.kits[handle]
    const lineItems = kit.products.nodes.map(product => {
      return {
        productHandle: product.handle,
        id: product.variants.nodes[0].id,
        sku: product.variants.nodes[0].sku,
        quantity: quantity,
      }
    })
    const response = await fetch(`${hostname}/checkout/kits/${handle}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ lineItems: lineItems })
    })

    const data = await response.json()
    console.log(data)

    return data.checkout
  }
}