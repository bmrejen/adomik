export default function Product({ product }) {
  const citiesJsx = product.cities.map((city) => <span>{city.label} </span>)
  return (
    <>
      <h1>Code: {product.code}</h1>
      <p>Cities: {citiesJsx}</p>
    </>
  )
}
