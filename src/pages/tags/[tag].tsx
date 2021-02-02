import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import PostList from '../../components/PostList';
import SEO from '../../components/SEO';
import Seo from '../../interfaces/seo';
import { getAllPosts, getPostsByTag } from '../../libs/api';

const Tag = ({ posts }) => {
  const { isFallback } = useRouter();

  if (isFallback) {
    return <div>Carregando</div>;
  }

  const seo: Seo = {
    article: false,
    metaTitle: 'Programação e Design | Gabriel Asakawa',
    metaDescription:
      '"Blog con conteúdo sobre tecnologia, programação, design e emprendedorismo. Fique por dentro dos melhores conteúdos e esteja atualizado',
  };

  return (
    <>
      <SEO {...seo} />
      <PostList posts={posts} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async context => {
  const { tag } = context.params;

  const posts = await getPostsByTag(`${tag}`);

  return {
    props: {
      posts,
    },
    revalidate: 20,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllPosts();

  return {
    paths: posts.map(post => ({
      params: {
        tag: post.slug,
      },
    })),
    fallback: true,
  };
};

export default Tag;
