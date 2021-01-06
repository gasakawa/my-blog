import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import Link from 'next/link';

import { getAllPosts } from '../libs/api';

import {
  HomeWrapper,
  PostItemWrapper,
  PostItemDate,
  PostItemExcerpt,
  PostItemLink,
  PostItemCategory,
  PostItemMeta,
  PostItemKeywords,
} from './styles/home';

export default function Home({ allPosts }) {
  return (
    <HomeWrapper>
      {allPosts.map(post => (
        <PostItemWrapper key={post.slug}>
          <PostItemMeta>
            <PostItemDate>
              {format(new Date(post.date), "d 'de' MMMM 'de' yyyy", {
                locale: ptBR,
              })}
            </PostItemDate>
            <PostItemCategory backgroundColor={post.background}>
              <Link href={`/categories/${post.category.toLowerCase()}`}>
                {post.category}
              </Link>{' '}
            </PostItemCategory>
          </PostItemMeta>

          <Link href={`/${post.slug}`} passHref>
            <PostItemLink>{post.title}</PostItemLink>
          </Link>

          <PostItemExcerpt>{post.description}</PostItemExcerpt>
          {post.keywords !== undefined && (
            <PostItemKeywords>
              {post.keywords.split(';').map(keyword => (
                <span>
                  <Link href={`/tags/${keyword}`}>{keyword}</Link>
                </span>
              ))}
            </PostItemKeywords>
          )}
        </PostItemWrapper>
      ))}
    </HomeWrapper>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'image',
    'description',
    'category',
    'background',
    'keywords',
  ]);

  return {
    props: { allPosts },
  };
}
