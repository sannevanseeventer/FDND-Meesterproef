import { gql } from "graphql-request";
import { hygraph } from "$lib/utils/hygraph.js";

export async function load() {
  let query = gql`
    query Notime {
      notimes {
        title
        slug
      }
    }
  `;

  return await hygraph.request(query);
}
