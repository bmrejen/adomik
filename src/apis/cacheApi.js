import { Product, User } from "../models"

export function _mapCacheToUsers(array) {
  return array.map((userData) => new User(userData))
}

export function _mapCacheToProducts(array) {
  return array.map((productData) => new Product(productData))
}
