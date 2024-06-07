import { gql } from 'graphql-request'
import { hygraph } from '$lib/utils/hygraph.js'

export async function load() {
  let query = gql`
    query Notime {
      notimes {
        title
        subtitle
        slug
        work {
          ... on Work {
            id
            period
            description
            function
            subtitle
          }
        }
        education {
          ... on Education {
            id
            period
            school
            study
          }
        }
        skills {
          ... on NotimeSkill {
            id
            subtitle
            bar {
              ... on Bar {
                id
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
    }
  `

  return await hygraph.request(query)
}
