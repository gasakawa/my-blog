import { GetStaticProps } from 'next';

import SEO from '../components/SEO';
import Seo from '../interfaces/seo';
import Pagination from '../components/Pagination';
import PostList from '../components/PostList';

import { getPaginationData, getPosts } from '../libs/posts';

export default function Home({
  posts,
  numPages,
  currentPage,
  isFirst,
  isLast,
  prevPage,
  nextPage,
}) {
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
}

export const getStaticProps: GetStaticProps = async () => {
  const { postsPerPage, numPages } = await getPaginationData();

  const posts = await getPosts(postsPerPage, 0);

  return {
    props: {
      posts,
      numPages,
      currentPage: 1,
      isFirst: true,
      isLast: false,
      prevPage: 0,
      nextPage: 2,
    },
  };
};
