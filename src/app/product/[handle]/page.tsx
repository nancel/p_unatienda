import { ProductView } from "app/components/product/ProductView"
import { getProducts } from "app/services/shopify/products"

interface ProductPageProps {
  searchParams: {
    id: string
  }
}

export async function generateMetadata({ searchParams }: ProductPageProps) { 
  const { id } = await searchParams
  const products = await getProducts(id)
  const product = products[0]
  return {
    title: product.title,
    description: product.description,
    keywords: product.tags,
    openGraph: {
      images: [product.image]
    }
  }
}


export default async function ProductPage({ searchParams }: ProductPageProps) {
  const { id } = await searchParams
  const products = await getProducts(id)
  const product = products[0]

  return <ProductView product={product} />
}