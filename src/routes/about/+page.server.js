import { gql } from "graphql-request";
import { hygraph } from "$lib/utils/hygraph.js";

export async function load() {
  let query = gql`
    query Abouts {
      abouts {
        slug
        title
        content
      }
    }
  `;

  return await hygraph.request(query);
}
