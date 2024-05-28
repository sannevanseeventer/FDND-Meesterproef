import 'dotenv/config'
import { fail } from '@sveltejs/kit'
import { request as graphqlRequest } from 'graphql-request'
import { gql } from 'graphql-request'
import { hygraph } from '$lib/utils/hygraph.js'

export const prerender = false

// GLOBALS //
// Query voor globale contactpagina
const NEW_QUERY = gql`
  query Contact {
    contacts {
      title
      slug
    }
  }
`

// Ophalen van contactgegevens
export async function load() {
  const newData = await hygraph.request(NEW_QUERY)

  return {
    contacts: newData.contacts,
  }
}

// FORMULIER //
// Verwerken van formulierdata en versturen naar Hygraph
export const actions = {
  default: async ({ request }) => {
    const formData = await request.formData()
    let name = formData.get('name')
    let email = formData.get('email')
    let comment = formData.get('comment')

    // Controleren of de naam minstens 2 karakters bevat
    if (name.length < 2)
      return fail(400, {
        error: true,
        message: 'Naam moet minstens 2 karakters bevatten',
        name,
        email,
        comment,
      })

    // GraphQL Mutatie om comment aan te maken
    const mutation = `
      mutation {
        createComment(data: { name: "${name}", email: "${email}", comment: "${comment}" }) {
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

    // Versturen van de data
    const postData = await graphqlRequest(HYGRAPH_URL, mutation, undefined, headers)
    return { success: true, postData }
  },
}
