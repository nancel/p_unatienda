import { env } from "app/config/env"

export const shopifyUrls = {
  products: {
    'all': `${env.SHOPIFY_HOSTNAME}/admin/api/2025-01/products.json`,
    'mainProducts': `${env.SHOPIFY_HOSTNAME}/admin/api/2025-01/collections/484912496958/products.json`,
  },
  collections: {
    'all': `${env.SHOPIFY_HOSTNAME}/admin/api/2025-01/smart_collections.json`,
    'products': (id: string) => `${env.SHOPIFY_HOSTNAME}/admin/api/2025-01/collections/${id}/products.json`
  }
}