import { gql } from "graphql-request";
import { hygraph } from "$lib/utils/hygraph.js";

export async function load() {
  let query = gql`
    query Skills {
      skills {
        title
        subtitle
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
  `;

  return await hygraph.request(query);
}
