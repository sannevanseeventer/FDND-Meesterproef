import { fail } from "@sveltejs/kit";
import { request as graphqlRequest } from "graphql-request";
import { gql } from "graphql-request";
import { hygraph } from "$lib/utils/hygraph.js";

export const prerender = false;

// Sending data to Hygraph
export const actions = {
  default: async ({ request, url }) => {
    const formData = await request.formData();
    let name = formData.get("name");
    let email = formData.get("email");
    let comment = formData.get("comment");

    // Check if the name contains at least 2 characters
    if (name.length < 2)
      return fail(400, {
        error: true,
        message: "Naam moet minstens 2 karaters bevatten",
        name,
        email,
        comment,
      });

    // Mutation
    const mutation = `
      mutation {
        createComment(data: { name: "${name}", email: "${email}" comment: "${comment}" }) {
          id
          name
          email
          comment
        }
      }
    `;

    // Hygraph API & TOKEN
    const endpoint =
      "https://eu-central-1-shared-euc1-02.cdn.hygraph.com/content/clr4toeau8nch01uq8b13r4o1/master";

    const HYGRAPH_TOKEN =
      "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE3MTY0NjEzMjcsImF1ZCI6WyJodHRwczovL2FwaS1ldS1jZW50cmFsLTEtc2hhcmVkLWV1YzEtMDIuaHlncmFwaC5jb20vdjIvY2xyNHRvZWF1OG5jaDAxdXE4YjEzcjRvMS9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC1ldS1jZW50cmFsLTEtc2hhcmVkLWV1YzEtMDIuaHlncmFwaC5jb20vIiwic3ViIjoiNTNkMDM4MTEtMTkxZS00M2NmLTkyNTgtOWE0OTVmY2IyZTJkIiwianRpIjoiY2x3ajRyOGNuMDJpeDA3dzg4cmdqOW8yZiJ9.0_HxoZXLqhoAMiJDqGVQ1G0F8R-5ujZ7tZdgXy9o2brU2_JJ8ObKPKEmpCgI7GWJYhAqSibOCIXqx2M7LJXt7KT3grQwX0ffLMHl4sjbqPzkyOO9qvWe4QU4RFNAAs1eix6gc9dzfc76QkZ9dc-gKgg9TFLXy4ShRAR3nxKjjyFH8i4vlAYuyrCVJjriCOa03t3XIDVpzCOOL2S85vkeY7o8ieF7qwj0EgfvsbAHTwr4Ci97tpxSLtrI6ZIrT2WDf345DY3lKnYpQPJE1htZrrQP-BZxigN7_ndMJq5UGx9iOWc600mGcG3_UOSACSNs7KMNdha2d_uf6r3msnMXWs4UhPB7B5X3r2V61x__7RfwKA4ivi3aqK-Ct5oE_Rj_jL6QD5WhnL_CnHIJlG_t9tZTPusV0cvEbm6hYv2-UWSbqfYackJO0uOJvrPMx2tMdhEnrvFrkUYdOUxNqYcsMgej9OEaPQCtCk9awcGjeQfUj2dJCUk9DuNbGvvwkeCE5ME1_ckRqOF3Ty3VppA9zQjD56DXaPVkEKltDHECJwgwwps3C68ziHrfA3EecvPXSjquAQe5t3bj9vNWP3qPpsBgiV9GQnBctZiox0DzP40aHTvVGeTJrgW5cVF1Y-T6zsdXgUG1O7rxxxYEYf6RkUafQd_cgr5JFeQyILcMXsE";
    const headers = {
      Authorization: `Bearer ${HYGRAPH_TOKEN}`,
    };

    // Posting the data
    const postData = await graphqlRequest(
      endpoint,
      mutation,
      undefined,
      headers
    );
    return { success: true, postData };
  },
};

// Query global contact page
const NEW_QUERY = gql`
  query Contact {
    contacts {
      title
      slug
    }
  }
`;

// Query comments
export async function load() {
  let commentsQuery = gql`
    query MyQuery {
      comments {
        name
        email
        comment
      }
    }
  `;

  // Fetch comments data
  const commentsData = await hygraph.request(commentsQuery);
  const newData = await hygraph.request(NEW_QUERY);

  // Return both data sets
  return {
    comments: commentsData.comments,
    contacts: newData.contacts,
  };
}
