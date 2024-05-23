// place files you want to import through the `$lib` alias in this folder.
import { fail } from "@sveltejs/kit";
import { request as graphqlRequest } from "graphql-request";
import { gql } from "graphql-request";
import { hygraph } from "$lib/utils/hygraph.js";

export async function handleContactForm({ request, url }) {
  const formData = await request.formData();
  let name = formData.get("name");
  let email = formData.get("email");
  let comment = formData.get("comment");

  // Check of de naam minimaal 2 karakters bevat
  if (name.length < 2)
    return fail(400, {
      error: true,
      message: "Naam moet minstens 2 karaters bevatten",
      name,
      email,
      comment,
    });

  // Maak nieuwe content aan voor Hygraph
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

  // Hygraph url
  const endpoint =
    "https://eu-central-1-shared-euc1-02.cdn.hygraph.com/content/clr4toeau8nch01uq8b13r4o1/master";

  // Hygraph autorisatie
  const HYGRAPH_TOKEN =
    "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE3MTY0NjEzMjcsImF1ZCI6WyJodHRwczovL2FwaS1ldS1jZW50cmFsLTEtc2hhcmVkLWV1YzEtMDIuaHlncmFwaC5jb20vdjIvY2xyNHRvZWF1OG5jaDAxdXE4YjEzcjRvMS9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC1ldS1jZW50cmFsLTEtc2hhcmVkLWV1YzEtMDIuaHlncmFwaC5jb20vIiwic3ViIjoiNTNkMDM4MTEtMTkxZS00M2NmLTkyNTgtOWE0OTVmY2IyZTJkIiwianRpIjoiY2x3ajRyOGNuMDJpeDA3dzg4cmdqOW8yZiJ9.0_HxoZXLqhoAMiJDqGVQ1G0F8R-5ujZ7tZdgXy9o2brU2_JJ8ObKPKEmpCgI7GWJYhAqSibOCIXqx2M7LJXt7KT3grQwX0ffLMHl4sjbqPzkyOO9qvWe4QU4RFNAAs1eix6gc9dzfc76QkZ9dc-gKgg9TFLXy4ShRAR3nxKjjyFH8i4vlAYuyrCVJjriCOa03t3XIDVpzCOOL2S85vkeY7o8ieF7qwj0EgfvsbAHTwr4Ci97tpxSLtrI6ZIrT2WDf345DY3lKnYpQPJE1htZrrQP-BZxigN7_ndMJq5UGx9iOWc600mGcG3_UOSACSNs7KMNdha2d_uf6r3msnMXWs4UhPB7B5X3r2V61x__7RfwKA4ivi3aqK-Ct5oE_Rj_jL6QD5WhnL_CnHIJlG_t9tZTPusV0cvEbm6hYv2-UWSbqfYackJO0uOJvrPMx2tMdhEnrvFrkUYdOUxNqYcsMgej9OEaPQCtCk9awcGjeQfUj2dJCUk9DuNbGvvwkeCE5ME1_ckRqOF3Ty3VppA9zQjD56DXaPVkEKltDHECJwgwwps3C68ziHrfA3EecvPXSjquAQe5t3bj9vNWP3qPpsBgiV9GQnBctZiox0DzP40aHTvVGeTJrgW5cVF1Y-T6zsdXgUG1O7rxxxYEYf6RkUafQd_cgr5JFeQyILcMXsE";
  const headers = {
    Authorization: `Bearer ${HYGRAPH_TOKEN}`,
  };

  // Voer de mutatie uit
  const postData = await graphqlRequest(endpoint, mutation, undefined, headers);
  return { success: true, postData };
}

export async function loadComments() {
  let query = gql`
    query MyQuery {
      comments {
        name
        email
        comment
      }
    }
  `;
  const data = await hygraph.request(query);
  return data;
}
