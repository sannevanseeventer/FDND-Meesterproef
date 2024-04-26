import { gql } from "graphql-request";
import { hygraph } from "$lib/utils/hygraph.js";

export async function load() {
  let query = gql`
    query Skills {
      skills {
        title
        name
        value
      }
    }
  `;

  return await hygraph.request(query);
}
