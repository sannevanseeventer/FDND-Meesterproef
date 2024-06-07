import { gql } from 'graphql-request'
import { hygraph } from '$lib/utils/hygraph.js'

export async function load() {
  let query = gql`
    query Notime {
      notimes {
        title
        subtitle
        slug
        skills {
          bar {
            ... on Bar {
              name
              value
              color {
                hex
              }
            }
          }
        }
      }
    }
  `

  return await hygraph.request(query)
}
