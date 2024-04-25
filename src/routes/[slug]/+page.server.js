import { gql } from "graphql-request";
import { hygraph } from "$lib/utils/hygraph.js";

export async function load({ params }) {
  // Extract the slug from the params
  const { slug } = params;

  // Define your GraphQL query with a filter for the specific slug
  const query = gql`
    query BlogPostsBySlug($slug: String!) {
      blogPosts(where: { slug: $slug }) {
        id
        title
        left
        top
        slug
        image {
          url
        }
        content {
          html
        }
      }
    }
  `;

  // Pass the slug as a variable to the query
  const variables = { slug };

  try {
    // Execute the GraphQL query with the variable
    const data = await hygraph.request(query, variables);

    // Return the first project found with the matching slug
    if (data.blogPosts.length > 0) {
      return {
        blogPost: data.blogPosts[0], // Assuming you want to return a single project
      };
    } else {
      // Handle the case where no project with the specified slug is found
      return {
        status: 404, // Not Found
        error: "Post not found",
      };
    }
  } catch (error) {
    // Handle any GraphQL request errors here
    console.error(error);
    return {
      status: 500, // Internal Server Error
      error: "Internal server error",
    };
  }
}
