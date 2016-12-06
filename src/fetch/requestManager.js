import 'whatwg-fetch'

export const fetchAPI = (method, route, body = {}) => {
  let headers = new Headers()
  const base64 = require('base-64')
  const auth = `${BASIC_AUTH_USERNAME}:${BASIC_AUTH_PASSWORD}`
  headers.append('Authorization', 'Basic ' + base64.encode(auth))
  headers.append('Content-Type', 'application/json')
  if (Object.keys(body).length === 0) {
    return fetch(`${API_URL}/${route}`, {
      method: method,
      headers: headers
    })
  } else {
    return fetch(`${API_URL}/${route}`, {
      method: method,
      headers: headers,
      body: body
    })
  }
}
