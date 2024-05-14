import { gql } from "graphql-request";
import { hygraph } from "$lib/utils/hygraph.js";

export async function load() {
  let query = gql`
    query Abouts {
      abouts {
        title
        slug
        image {
          url
        }
        quality {
          quality
          value
          color {
            hex
          }
        }
      }
    }
  `;

  return await hygraph.request(query);
}
