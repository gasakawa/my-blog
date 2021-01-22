import React from 'react';
import ReactDisqusComments from 'react-disqus-comments';

import {
  CommentsWrapper,
  CommentsTitle,
} from '../../styles/components/comments';

interface Props {
  slug: string;
  title: string;
}
const Comments: React.FC<Props> = ({ slug, title }) => {
  const completeUrl = `https://gasakawa.com${slug}`;

  return (
    <CommentsWrapper>
      <CommentsTitle>Comentários</CommentsTitle>
      <ReactDisqusComments
        shortname='gasakawa'
        identifier={completeUrl}
        title={title}
        url={completeUrl}
      />
    </CommentsWrapper>
  );
};

export default Comments;
