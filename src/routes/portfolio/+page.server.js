import { gql } from "graphql-request";
import { hygraph } from "$lib/utils/hygraph.js";

export async function load() {
  let query = gql`
    query Portfolios {
      portfolios {
        title
        subtitle
        description
        image {
          url
        }
        label {
          label
          labelcolor {
            hex
          }
        }
      }
    }
  `;

  return await hygraph.request(query);
}
