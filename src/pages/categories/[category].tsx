import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import PostList from '../../components/PostList';
import SEO from '../../components/SEO';
import Seo from '../../interfaces/seo';
import {
  getAllPosts,
  getCategoryByshortName,
  getPostsByCategory,
} from '../../libs/api';
import { CategoryPageWrapper } from '../../styles/pages/category';

const Category = ({ posts, category }) => {
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
      <CategoryPageWrapper>
        <h1>Posts de {category.name} </h1>
      </CategoryPageWrapper>
      <PostList posts={posts} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async context => {
  const { category } = context.params;

  const posts = await getPostsByCategory(`${category}`);
  const categoryObj = await getCategoryByshortName(`${category}`);

  return {
    props: {
      posts,
      category: categoryObj,
    },
    revalidate: 20,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllPosts();

  return {
    paths: posts.map(post => ({
      params: {
        category: post.slug,
      },
    })),
    fallback: true,
  };
};

export default Category;
