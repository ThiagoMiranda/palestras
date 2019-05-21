/**
 * Get request
 */
/* global XMLHttpRequest */
export default function({ url, method = 'GET', body = null, headers = {'Content-Type': 'application/json'} }, timeout = 10000) {
  const xhr = new XMLHttpRequest()
  const promise = new Promise((resolve, reject) => {
    xhr.open(method, url)
    xhr.timeout = timeout

    Object.keys(headers).forEach(key => {
      xhr.setRequestHeader(key, headers[key])
    })

    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        try {
          let response = xhr.response
          if (response) response = JSON.parse(response)
          resolve(response, xhr)
        } catch (error) {
          reject(xhr)
        }
      } else reject(xhr)
    }

    xhr.onerror = xhr.onabort = xhr.ontimeout = () => reject(xhr)
    let data = body ? JSON.stringify(body) : null
    if (headers.hasOwnProperty('Content-Type') && headers['Content-Type'] === 'application/x-www-form-urlencoded') {
      data = Object.keys(body).reduce((acc, item) => {
        acc.push(`${item}=${encodeURIComponent(body[item])}`)
        return acc
      }, [])
      data = data.join('&')
    }

    xhr.send(data)
  })

  promise.abort = () => {xhr.abort()}

  return promise
}
