export default function _mapApiProductToProduct({ product: { code }, children }) {
  const { data: cities } = children[0]

  return { code, cities }
}
