import { Product } from "./"

export default function ProductList({ products }) {
  return products.map((product) => <Product key={product.id} product={product} />)
}
