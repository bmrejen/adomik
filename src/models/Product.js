export default class Product {
  constructor({ code, cities = [] }) {
    Object.assign(this, { code, cities })
  }
}
