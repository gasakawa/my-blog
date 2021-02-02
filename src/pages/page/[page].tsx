import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import Pagination from '../../components/Pagination';
import PostList from '../../components/PostList';
import SEO from '../../components/SEO';
import Seo from '../../interfaces/seo';
import { getPaginationData, getPosts } from '../../libs/api';

const Page = ({
  posts,
  numPages,
  currentPage,
  isFirst,
  isLast,
  prevPage,
  nextPage,
}) => {
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
      <Pagination
        numPages={numPages}
        currentPage={currentPage}
        isFirst={isFirst}
        isLast={isLast}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </>
  );
};

export const getStaticProps: GetStaticProps = async context => {
  const { page } = context.params;

  const pageInt = page === undefined ? 1 : Number(page);

  const { postsPerPage, numPages } = await getPaginationData();
  const skip = pageInt === 1 ? 0 : (pageInt - 1) * postsPerPage;

  const posts = await getPosts(postsPerPage, skip);

  return {
    props: {
      posts,
      numPages,
      currentPage: pageInt,
      isFirst: pageInt === 1,
      isLast: pageInt === numPages,
      prevPage: pageInt - 1,
      nextPage: pageInt + 1,
    },
    revalidate: 20,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { numPages } = await getPaginationData();

  const paths = Array.from({ length: numPages }).map((_, index) => ({
    params: { page: `${index + 1}` },
  }));

  return {
    paths,
    fallback: true,
  };
};

export default Page;
