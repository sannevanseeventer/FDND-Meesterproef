import 'dotenv/config'
import { fail } from '@sveltejs/kit'
import { request as graphqlRequest } from 'graphql-request'
import { gql } from 'graphql-request'
import { hygraph } from '$lib/utils/hygraph.js'

export const prerender = false

// Sending data to Hygraph
export const actions = {
  default: async ({ request, url }) => {
    const formData = await request.formData()
    let name = formData.get('name')
    let email = formData.get('email')
    let comment = formData.get('comment')

    // Check if the name contains at least 2 characters
    if (name.length < 2)
      return fail(400, {
        error: true,
        message: 'Naam moet minstens 2 karaters bevatten',
        name,
        email,
        comment,
      })

    // Mutation
    const mutation = `
      mutation {
        createComment(data: { name: "${name}", email: "${email}" comment: "${comment}" }) {
          id
          name
          email
          comment
        }
      }
    `

    // Hygraph API & TOKEN
    const HYGRAPH_URL = process.env.HYGRAPH_URL
    const HYGRAPH_KEY = process.env.HYGRAPH_KEY

    const headers = {
      Authorization: `Bearer ${HYGRAPH_KEY}`,
    }

    // Posting the data
    const postData = await graphqlRequest(HYGRAPH_URL, mutation, undefined, headers)
    return { success: true, postData }
  },
}

// Query global contact page
const NEW_QUERY = gql`
  query Contact {
    contacts {
      title
      slug
    }
  }
`

// Query comments
export async function load() {
  let commentsQuery = gql`
    query MyQuery {
      comments {
        name
        email
        comment
      }
    }
  `

  // Fetch comments data
  const commentsData = await hygraph.request(commentsQuery)
  const newData = await hygraph.request(NEW_QUERY)

  // Return both data sets
  return {
    comments: commentsData.comments,
    contacts: newData.contacts,
  }
}
