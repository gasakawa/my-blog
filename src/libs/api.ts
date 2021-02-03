import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import Category from '../interfaces/category';
import Global from '../interfaces/global';
import Post from '../interfaces/post';
import Tag from '../interfaces/tag';

const client = new ApolloClient({
  uri: process.env.API_URL,
  cache: new InMemoryCache(),
});

export const getAllPosts = async (): Promise<Post[]> => {
  const { data } = await client.query({
    query: gql`
      query {
        posts {
          id
          slug
        }
      }
    `,
  });

  return data.posts;
};

export const getPost = async (slug: string | string[]): Promise<Post> => {
  const { data } = await client.query({
    query: gql`
      query getPost($slug: String) {
        posts(where: { slug: $slug }) {
          title
          excerpt
          content
          creation_date
          slug
          tags {
            name
            short_name
          }
          featured_image {
            name
            url
            formats
          }
        }
      }
    `,
    variables: {
      slug,
    },
  });
  const [post] = data.posts;
  return post;
};

export const getPosts = async (
  limit: number,
  start: number,
): Promise<Post[]> => {
  const { data } = await client.query({
    query: gql`
      query getPosts($limit: Int, $start: Int) {
        posts(sort: "creation_date:desc", limit: $limit, start: $start) {
          id
          title
          slug
          creation_date
          excerpt
          category {
            name
            short_name
            background_color
          }
          tags {
            name
            short_name
            color
          }
          featured_image {
            name
            url
          }
        }
      }
    `,
    variables: {
      limit,
      start,
    },
  });

  return data.posts as Post[];
};

export const getGlobal = async (): Promise<Global> => {
  const { data } = await client.query({
    query: gql`
      query {
        global {
          site_name
          meta_title
          meta_description
          favicon {
            name
            url
          }
        }
      }
    `,
  });

  const { global } = data;
  return global;
};

export const countPosts = async (): Promise<number> => {
  const response = await fetch(
    `${process.env.REST_URL}/posts/count?published_at_null=false`,
  );
  const totalPosts = await response.json();

  return totalPosts;
};

export const getPaginationData = async () => {
  const postsPerPage = Number(process.env.POSTS_PER_PAGE);
  const totalPosts = await countPosts();
  const numPages = Math.ceil(totalPosts / postsPerPage);

  return {
    postsPerPage,
    totalPosts,
    numPages,
  };
};

export const getPostsByCategory = async (
  short_name: string,
): Promise<Post[]> => {
  const { data } = await client.query({
    query: gql`
      query getPosts($short_name: String) {
        posts(
          sort: "creation_date:desc"
          where: { category: { short_name: $short_name } }
        ) {
          id
          title
          slug
          creation_date
          excerpt
          category {
            name
            short_name
            background_color
          }
          tags {
            name
            short_name
            color
          }
          featured_image {
            name
            url
          }
        }
      }
    `,
    variables: {
      short_name,
    },
  });

  return data.posts as Post[];
};

export const getPostsByTag = async (short_name: string): Promise<Post[]> => {
  const { data } = await client.query({
    query: gql`
      query getPosts($short_name: String) {
        posts(
          sort: "creation_date:desc"
          where: { tags: { short_name: $short_name } }
        ) {
          id
          title
          slug
          creation_date
          excerpt
          category {
            name
            short_name
            background_color
          }
          tags {
            name
            short_name
            color
          }
          featured_image {
            name
            url
          }
        }
      }
    `,
    variables: {
      short_name,
    },
  });

  return data.posts as Post[];
};

export const getTagByshortName = async (short_name: string): Promise<Tag> => {
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

export const getCategoryByshortName = async (
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
