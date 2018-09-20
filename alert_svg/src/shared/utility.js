import scrollTo from './scroll'

/**
 * Group by section
 */

export const parseSection = (data) => {
  const parsedSection = data.allMarkdownRemark.edges.reduce((acc, item) => {
    acc[item.node.frontmatter.section] = item.node
    return acc
  }, {})
  return parsedSection
}

/**
 * Get request
 */
/* global XMLHttpRequest */
export const request = ({ url, method = 'GET', body = null, headers = {'Content-Type': 'application/json'} }, timeout = 10000) => {
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

/** Debounce for any event listener */
export const debounce = (func, wait) => {
  let timeout
  return (...args) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func.apply(this, args), wait)
  }
}

/**
 * Convert to monetary format
 */
export const numberToReal = (number) => {
  let splitedNumber = number.toFixed(2).split('.')
  splitedNumber[0] = splitedNumber[0].split(/(?=(?:...)*$)/).join('.')
  return splitedNumber.join(',')
}

/** Mimics underscore groupBy */
export const groupBy = (xs, key) => {
  return xs.reduce(function (rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x)
    return rv
  }, {})
}

/** Convert account number */
export const interAccountMask = (value, evt) => {
  value = value.replace(/-/gi, '')
  if (value.length > 5) {
    return value.replace(/(\d{1}$)/, '-$1')
  } else return value
}

/** Get is visible on viewport */
export const isVisible = elem => {
  const { top, bottom, left, right } = elem.getBoundingClientRect()
  const width = window.innerWidth || document.documentElement.clientWidth
  const height = window.innerHeight || document.documentElement.clientHeight
  return top >= 0 && left >= 0 && right <= width && bottom <= height
}

/** Validate CPF */
const invalidsCPF = [
  '00000000000',
  '11111111111',
  '22222222222',
  '33333333333',
  '44444444444',
  '55555555555',
  '66666666666',
  '77777777777',
  '88888888888',
  '99999999999'
]
export const checkValidCPF = strCpf => {
  const regex = /([0-9]{2}[.]?[0-9]{3}[.]?[0-9]{3}[/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[.]?[0-9]{3}[.]?[0-9]{3}[-]?[0-9]{2})/
  let sum = 0
  let rest

  if (!strCpf) return false

  if (!strCpf.match(regex)) return false

  strCpf = strCpf.replace(/\.|-/g, '')

  if (invalidsCPF.indexOf(strCpf) > -1) return false

  //  Validates first digit
  for (let i = 0; i < 9; i++) sum += parseInt(strCpf.charAt(i)) * (10 - i)
  rest = 11 - (sum % 11)
  if (rest === 10 || rest === 11) rest = 0
  if (rest !== parseInt(strCpf.charAt(9))) return false
  sum = 0

  //  Validates second digit
  for (let i = 0; i < 10; i++) sum += parseInt(strCpf.charAt(i)) * (11 - i)
  rest = 11 - (sum % 11)

  if (rest === 10 || rest === 11) rest = 0
  if (rest !== parseInt(strCpf.charAt(10))) return false

  return true
}

/** Validate CNPJ */
/** Validate CNPJ */
export const checkValidCNPJ = cnpj => {
  if (cnpj === undefined || cnpj === '') {
    return false
  }

  cnpj = cnpj.replace(/[^\d]+/g, '')

  if (cnpj.length !== 14) {
    return false
  }

  // Elimina CNPJs invalidos conhecidos
  if (cnpj === '00000000000000' ||
      cnpj === '11111111111111' ||
      cnpj === '22222222222222' ||
      cnpj === '33333333333333' ||
      cnpj === '44444444444444' ||
      cnpj === '55555555555555' ||
      cnpj === '66666666666666' ||
      cnpj === '77777777777777' ||
      cnpj === '88888888888888' ||
      cnpj === '99999999999999') {
    return false
  }

  // Valida DVs
  let tamanho = cnpj.length - 2
  let numeros = cnpj.substring(0, tamanho)
  let digitos = cnpj.substring(tamanho)
  let soma = 0
  let pos = tamanho - 7
  for (let i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--
    if (pos < 2) {
      pos = 9
    }
  }
  let resultado = soma % 11 < 2 ? 0 : 11 - soma % 11
  resultado = resultado.toString()

  if (resultado !== digitos.charAt(0)) {
    return false
  }

  tamanho = tamanho + 1
  numeros = cnpj.substring(0, tamanho)
  soma = 0
  pos = tamanho - 7
  for (let i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--
    if (pos < 2) {
      pos = 9
    }
  }

  resultado = soma % 11 < 2 ? 0 : 11 - soma % 11
  resultado = resultado.toString()
  if (resultado !== digitos.charAt(1)) {
    return false
  }

  return true
}

/**
 * Fixed form
 */
const WIDTH_LG = 991
export const handleFormPosition = () => {
  if (typeof document !== 'undefined') {
    const formSection = document.getElementsByClassName('form-section')
    const footerHeight = document.querySelector(`footer[class*='footer']`).offsetHeight
    const windowHeight = document.body.scrollHeight
    const windowWidth = window.innerWidth
    if (formSection.length > 0 && windowWidth > WIDTH_LG) {
      formSection[0].style.height = (windowHeight - footerHeight - formSection[0].offsetTop - 50) + 'px'
    } else if (formSection.length > 0) {
      formSection[0].style.height = 'auto'
    }
  }
}

/**
 * Ga track event
 *
 */
export const sendGAEvent = (action, category, type = 'send', callback = () => {}) => {
  if (window && window.ga) {
    window.ga(type, {
      hitType: 'event',
      eventCategory: category,
      eventAction: action,
      hitCallback: callback
    })
  }
}

/**
 * return the space in pixels between two elements based on ids
*/
export const spaceBetween = (idA, idB) => {
  if (!idA || !idB || !document.getElementById(idA) || !document.getElementById(idB)) {
    return 0
  }
  const { bottom } = document.getElementById(idA).getBoundingClientRect()
  const { top } = document.getElementById(idB).getBoundingClientRect()
  return (top) - (bottom)
}

/**
 * change viewport listener
 * @param {*} elem 
 * @param {*} area 
 */
export const reacheadElem = (elem, area) => {
  if (!area) {
    area = 700
  }

  const yValue = elem.getBoundingClientRect().y
  const topValue = elem.getBoundingClientRect().top

  return (yValue) ? (yValue < area) : (topValue < area)
}

/**
 * 
 * @param {*} selector - element selector
 * @param {*} ease - ease ( support in-out-quad )
 * @param {*} duration - duration in miliseconds
 * @param {*} evt - DOM event
 */
export const scrollToElement = (selector, ease = 'in-out-quad', duration = 1000, evt = null) => {
  try {
    evt && evt.preventDefault()
    const top = (typeof selector === 'string' ? document.querySelector(selector) : selector).offsetTop
    scrollTo(0, top, { ease, duration })
  } catch(error) { console.error(error) }
}