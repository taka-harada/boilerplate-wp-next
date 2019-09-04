import fetch from 'isomorphic-unfetch'

export const url = 'https://uniapp-api.hivelocity.co.jp/wp-json/'

export function blog(page) {
  if (page) {
    return fetch(`${url}wp/v2/blog?page=${page}`)
  }
  return fetch(`${url}wp/v2/blog`)
}
