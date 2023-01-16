import { shopifyApi, LATEST_API_VERSION, DataType } from '@shopify/shopify-api';
import 'http'
import '@shopify/shopify-api/adapters/node';

const storefrontAccessToken = '03a9c792237ad135a6d863deacf9b088'
const domain = 'eosfoundry.myshopify.com'

const shopify = shopifyApi({
  apiKey: '',
  apiSecretKey: '',
  scopes: [
    `unauthenticated_read_checkouts`,
    `unauthenticated_write_checkouts`,
    `unauthenticated_read_product_listings`,
    `unauthenticated_read_content`,
  ],
  hostName: domain,
  apiVersion: LATEST_API_VERSION,
  isEmbeddedApp: false,
})

const storefrontClient = new shopify.clients.Storefront({
  domain: domain,
  storefrontAccessToken: storefrontAccessToken,
});
