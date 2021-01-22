import React from 'react';
import Link from 'next/link';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import {
  PostListWrapper,
  PostItemWrapper,
  PostItemDate,
  PostItemExcerpt,
  PostItemLink,
  PostItemCategory,
  PostItemMeta,
  PostItemKeywords,
} from '../../styles/components/post-list';

import Post from '../../interfaces/post';

interface Props {
  posts: Post[];
}

const PostList: React.FC<Props> = ({ posts }) => {
  return (
    <PostListWrapper>
      {posts !== undefined &&
        posts.map(post => (
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
    </PostListWrapper>
  );
};

export default PostList;
