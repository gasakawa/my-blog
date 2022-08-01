import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import readingTime from 'reading-time';

import {
  getPost,
  getAllPosts,
  getPreviousPost,
  getNextPost,
} from '../libs/posts';
import markdownToHtml from '../libs/markdown-to-html';
import { GetStaticPaths, GetStaticProps } from 'next';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import {
  PostHeader,
  PostDate,
  PostTitle,
  PostDescription,
  PostTags,
  MainContent,
  PostBackListing,
} from '../styles/components/post-page';
import Link from 'next/link';
import Seo from '../interfaces/seo';
import SEO from '../components/SEO';
import Tag from '../interfaces/tag';
import RecommendedPost from '../components/RecommendedPost';
import { PostLink } from '../interfaces/post';

const PostPage = props => {
  const { meta, content } = props;
  const previousPost = props.previousPost as PostLink;
  const nextPost = props.nextPost as PostLink;
  const { isFallback } = useRouter();

  if (isFallback) {
    return <div>Carregando</div>;
  }

  const seo: Seo = {
    metaTitle: `${meta.title} | Gabriel Asakawa`,
    metaDescription: meta.excerpt,
    featuredImage: meta.featured_image,
    article: true,
  };

  return (
    <>
      <SEO {...seo} />
      <Head>
        <link
          rel='preload'
          href='https://unpkg.com/prismjs@1.23.0/themes/prism-tomorrow.css'
          as='script'
        />
        <link
          rel='preload'
          href='https://unpkg.com/prismjs@1.23.0/themes/prism-coy.css'
          as='script'
        />
        <link
          rel='preload'
          href='https://unpkg.com/prismjs@1.23.0/themes/prism-okaidia.css'
          as='script'
        />
        <link
          rel='preload'
          href='https://unpkg.com/prismjs@1.23.0/themes/prism-funky.css'
          as='script'
        />
        <link
          href={`https://unpkg.com/prismjs@1.23.0/themes/prism-okaidia.css`}
          rel='stylesheet'
        />
      </Head>
      <PostHeader>
        <PostBackListing>
          <Link href={`/`}>&larr; Voltar na listagem</Link>
        </PostBackListing>
        <PostDate>
          {meta.creation_date}
          &nbsp; - &nbsp;
          {`${Math.ceil(readingTime(content).minutes)} min de leitura`}
        </PostDate>
        <PostTitle>{meta.title}</PostTitle>
        <PostDescription>{meta.excerpt}</PostDescription>
        {meta.tags !== undefined && (
          <PostTags>
            {meta.tags.map((tag: Tag) => (
              <span key={tag.short_name}>
                <Link href={`/tags/${tag.short_name}`}>{tag.name}</Link>
              </span>
            ))}
          </PostTags>
        )}
      </PostHeader>
      <MainContent>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </MainContent>
      <RecommendedPost previousPost={previousPost} nextPost={nextPost} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async context => {
  const { slug } = context.params;
  const post = await getPost(slug);
  const previousPost = (await getPreviousPost(post.creation_date)) as PostLink;
  const nextPost = (await getNextPost(post.creation_date)) as PostLink;
  const meta = {
    title: post.title,
    excerpt: post.excerpt,
    creation_date: format(
      new Date(post.creation_date),
      "d 'de' MMMM 'de' yyyy",
      {
        locale: ptBR,
      },
    ),
    slug: post.slug,
    tags: post.tags,
    featured_image: post.featured_image.url,
  };

  const content = await markdownToHtml(post.content);

  return {
    props: {
      meta,
      content,
      nextPost:
        nextPost !== null
          ? {
              title: nextPost.title,
              slug: nextPost.slug,
            }
          : null,
      previousPost:
        previousPost !== null
          ? {
              title: previousPost.title,
              slug: previousPost.slug,
            }
          : null,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllPosts();

  return {
    paths: posts.map(post => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  };
};

export default PostPage;
