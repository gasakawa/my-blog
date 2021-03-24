import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import PostList from '../../components/PostList';
import SEO from '../../components/SEO';
import Seo from '../../interfaces/seo';
import { getAllPosts, getPostsByTag } from '../../libs/posts';
import { getAllTags, getTagByShortName } from '../../libs/tags';
import { TagPageWrapper } from '../../styles/pages/tag';

const Tag = ({ posts, tag }) => {
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
      <TagPageWrapper>
        <h1>Posts de {tag.name} </h1>
      </TagPageWrapper>
      <PostList posts={posts} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async context => {
  const { tag } = context.params;

  const posts = await getPostsByTag(`${tag}`);
  const tagObj = await getTagByShortName(`${tag}`);

  return {
    props: {
      posts,
      tag: tagObj,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const tags = await getAllTags();

  return {
    paths: tags.map(tag => ({
      params: {
        tag: tag.short_name,
      },
    })),
    fallback: true,
  };
};

export default Tag;
