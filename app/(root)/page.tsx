import ProductList from '@/components/shared/product/product-list'
import { getLatestProducts } from '@/lib/actions/products.action'

export default async function page() {
  const latestProducts = await getLatestProducts()

  return (
    <>
      <ProductList data={latestProducts} title='Newest Arrrivals' limit={4} /></>
  )
}
