import { gql } from "graphql-request";
import { hygraph } from "$lib/utils/hygraph.js";

export async function load() {
  let query = gql`
    query Experiences {
      experiences {
        title
        slug
        work {
          year
          function
          subtitle
          description
          period
          color {
            hex
          }
        }
      }
    }
  `;

  return await hygraph.request(query);
}
