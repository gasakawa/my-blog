import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import Category from '../interfaces/category';

const client = new ApolloClient({
  uri: process.env.API_URL,
  cache: new InMemoryCache(),
});

export const getAllCategories = async (): Promise<Category[]> => {
  const { data } = await client.query({
    query: gql`
      query {
        categories {
          name
          short_name
          background_color
        }
      }
    `,
  });

  return data.categories;
};

export const getCategoryByShortName = async (
  short_name: string,
): Promise<Category> => {
  const { data } = await client.query({
    query: gql`
      query($short_name: String) {
        categories(where: { short_name: $short_name }) {
          name
          short_name
          background_color
        }
      }
    `,
    variables: {
      short_name,
    },
  });

  const [category] = data.categories;
  return category;
};
