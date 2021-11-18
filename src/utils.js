import { Product, User } from "./models/"
import {
  _mapApiUserToUser,
  _mapApiProductToProduct,
  _restoreDataFromCache,
  apiEnpoints
} from "./apis/"

export function mapKeyToName(string) {
  return string
    .replace(/([A-Z])/g, " $1")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
}

export function getData(key, setState) {
  const storedData = JSON.parse(localStorage.getItem(key) || "")
  if (storedData && storedData.length > 0) {
    _restoreDataFromCache(key, setState, storedData)
  } else {
    return _fetchData(key, setState)
  }
}

function _getUrlFromKey(key) {
  return `${process.env.BACKEND_URL}/${key}`
}

function _fetchData(key, setState) {
  const url = _getUrlFromKey(key)
  const controller = new AbortController()
  const { signal } = controller
  fetch(url, { signal })
    .then((res) => {
      if (!res.ok) {
        throw new Error("Network response was not OK")
      }
      return res.json()
    })
    .then((res) => _createInstances(res, key, setState))
    .catch(console.error)

  return controller.abort
}

function _createInstances(res, key, setState) {
  if (!apiEnpoints.includes(key)) throw new Error("Invalid key")
  let instances
  if (key === "users") instances = res.map((userData) => new User(_mapApiUserToUser(userData)))
  if (key === "components")
    instances = res.map((productData) => new Product(_mapApiProductToProduct(productData)))
  setState(instances)
}
