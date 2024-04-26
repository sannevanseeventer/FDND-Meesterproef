import { gql } from "graphql-request";
import { hygraph } from "$lib/utils/hygraph.js";

export async function load() {
  let query = gql`
    query Page {
      pages {
        title
        left
        top
        url
      }
    }
  `;

  return await hygraph.request(query);
}
