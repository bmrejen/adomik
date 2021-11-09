import User from "./models/User"
import _mapApiUserToUser from "./apis/UserApi"

export function getData(key, setState) {
  const storedData = JSON.parse(localStorage.getItem(key) || "")
  if (storedData && storedData.length > 0) {
    if (key === "users") setState(_mapCacheToUsers(storedData))
  } else {
    return _fetchData(key, setState)
  }
}

function _mapCacheToUsers(array) {
  return array.map((userData) => new User(userData))
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
    .then((res) => {
      const userInstances = res.map((userData) => new User(_mapApiUserToUser(userData)))
      console.log({ userInstances })
      setState(userInstances)
    })
    .catch(console.error)

  return controller.abort
}
