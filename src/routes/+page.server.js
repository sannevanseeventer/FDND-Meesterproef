import { gql } from "graphql-request";
import { hygraph } from "$lib/utils/hygraph.js";

export async function load() {
  let query = gql`
    query BlogPosts {
      blogPosts {
        id
        title
        left
        top
        slug
        image {
          url
        }
      }
    }
  `;

  return await hygraph.request(query);
}
