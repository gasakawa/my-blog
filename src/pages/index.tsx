import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { GetStaticProps } from 'next';

import Link from 'next/link';
import SEO from '../components/SEO';
import Post from '../interfaces/post';
import Seo from '../interfaces/seo';

import { getPosts } from '../libs/api';

import {
  HomeWrapper,
  PostItemWrapper,
  PostItemDate,
  PostItemExcerpt,
  PostItemLink,
  PostItemCategory,
  PostItemMeta,
  PostItemKeywords,
} from '../styles/pages/home';

export default function Home(props) {
  const posts: Post[] = props.posts;
  const seo: Seo = {
    article: false,
    metaTitle: 'Programação e Design | Gabriel Asakawa',
    metaDescription:
      '"Blog con conteúdo sobre tecnologia, programação, design e emprendedorismo. Fique por dentro dos melhores conteúdos e esteja atualizado',
  };

  return (
    <>
      <SEO {...seo} />
      <HomeWrapper>
        {posts.map(post => (
          <PostItemWrapper key={post.id}>
            <PostItemMeta>
              <PostItemDate>
                {format(new Date(post.creation_date), "d 'de' MMMM 'de' yyyy", {
                  locale: ptBR,
                })}
              </PostItemDate>
              <PostItemCategory
                backgroundColor={post.category.background_color}
              >
                <Link
                  href={`/categories/${post.category.short_name.toLowerCase()}`}
                >
                  {post.category.name}
                </Link>
              </PostItemCategory>
            </PostItemMeta>

            <Link href={`/${post.slug}`} passHref>
              <PostItemLink>{post.title}</PostItemLink>
            </Link>

            <PostItemExcerpt>{post.excerpt}</PostItemExcerpt>
            {post.tags !== undefined && (
              <PostItemKeywords>
                {post.tags.map(tag => (
                  <span key={tag.short_name}>
                    <Link href={`/tags/${tag.short_name}`}>{tag.name}</Link>
                  </span>
                ))}
              </PostItemKeywords>
            )}
          </PostItemWrapper>
        ))}
      </HomeWrapper>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPosts(10, 0);

  return {
    props: {
      posts,
    },
    revalidate: 20,
  };
};
