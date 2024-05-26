import { gql } from 'graphql-request'
import { hygraph } from '$lib/utils/hygraph.js'

export async function load() {
  let query = gql`
    query Homepage {
      pages {
        title
        left
        top
        url
      }
    }
  `

  return await hygraph.request(query)
}
