import { apiEnpoints } from "."
import { Product, User } from "../models"

export function _mapCacheToUsers(array) {
  return array.map((userData) => new User(userData))
}

export function _mapCacheToProducts(array) {
  return array.map((productData) => new Product(productData))
}

export function _restoreDataFromCache(key, setState, storedData) {
  if (!apiEnpoints.includes(key)) throw new Error("Invalid key")
  if (key === "users") setState(_mapCacheToUsers(storedData))
  if (key === "components") setState(_mapCacheToProducts(storedData))
}
