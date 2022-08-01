import Link from 'next/link';
import React from 'react';
import { PostLink } from '../../interfaces/post';
import {
  RecommendedPostLink,
  RecommendedPostWrapper,
} from '../../styles/components/recommendedpost';

type Props = {
  previousPost: PostLink;
  nextPost: PostLink;
};

const RecommendedPost: React.FC<Props> = ({ previousPost, nextPost }) => {
  return (
    <RecommendedPostWrapper>
      {previousPost !== null && (
        <Link href={`/${previousPost.slug}`}>
          <RecommendedPostLink type='previous'>
            <span>&larr;</span> {previousPost.title}
          </RecommendedPostLink>
        </Link>
      )}
      {nextPost !== null && (
        <Link href={`/${nextPost.slug}`}>
          <RecommendedPostLink type='next'>
            {nextPost.title} <span>&rarr;</span>
          </RecommendedPostLink>
        </Link>
      )}
    </RecommendedPostWrapper>
  );
};

export default RecommendedPost;
