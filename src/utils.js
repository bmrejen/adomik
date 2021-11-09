import { Product, User } from "./models/"
import { _mapApiUserToUser, _mapApiProductToProduct, apiEnpoints } from "./apis/"

export function getData(key, setState) {
  const storedData = JSON.parse(localStorage.getItem(key) || "")
  if (storedData && storedData.length > 0) {
    _restoreDataFromCache(key, setState, storedData)
  } else {
    return _fetchData(key, setState)
  }
}

function _restoreDataFromCache(key, setState, storedData) {
  if (!apiEnpoints.includes(key)) throw new Error("Invalid key")
  if (key === "users") setState(_mapCacheToUsers(storedData))
  if (key === "components") setState(_mapCacheToProducts(storedData))
}

function _mapCacheToUsers(array) {
  return array.map((userData) => new User(userData))
}

function _mapCacheToProducts(array) {
  return array.map((productData) => new Product(productData))
}

function _getUrlFromKey(key) {
  return process.env.REACT_APP_API_URL + key
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
