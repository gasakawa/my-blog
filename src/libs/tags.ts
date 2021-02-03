import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import Tag from '../interfaces/tag';

const client = new ApolloClient({
  uri: process.env.API_URL,
  cache: new InMemoryCache(),
});

export const getAllTags = async (): Promise<Tag[]> => {
  const { data } = await client.query({
    query: gql`
      query {
        tags {
          name
          short_name
          color
        }
      }
    `,
  });

  return data.tags;
};

export const getTagByShortName = async (short_name: string): Promise<Tag> => {
  const { data } = await client.query({
    query: gql`
      query($short_name: String) {
        tags(where: { short_name: $short_name }) {
          name
          short_name
          color
        }
      }
    `,
    variables: {
      short_name,
    },
  });

  const [tag] = data.tags;
  return tag;
};
