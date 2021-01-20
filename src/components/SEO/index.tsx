import Head from 'next/head';
import React, { useContext } from 'react';
import { GlobalContext } from '../../pages/_app';
import Seo from '../../interfaces/seo';

const SEO = (seo: Seo) => {
  const { site_name, meta_title, meta_description } = useContext(GlobalContext);

  const allSeo = {
    metaTitle: seo.metaTitle
      ? `${seo.metaTitle} | ${site_name}`
      : `${meta_title} | ${site_name}`,
    metaDescription: seo.metaDescription
      ? seo.metaDescription
      : meta_description,
    featuredImage: seo.featuredImage,
    article: seo.article,
  };
  return (
    <Head>
      {allSeo.metaTitle && (
        <>
          <title>{allSeo.metaTitle}</title>
          <meta property='og:title' content={allSeo.metaTitle} />
          <meta name='twitter:title' content={allSeo.metaTitle} />
        </>
      )}
      {allSeo.metaDescription && (
        <>
          <meta name='description' content={allSeo.metaDescription} />
          <meta property='og:description' content={allSeo.metaDescription} />
          <meta name='twitter:description' content={allSeo.metaDescription} />
        </>
      )}
      {allSeo.featuredImage && (
        <>
          <meta property='og:image' content={allSeo.featuredImage} />
          <meta name='twitter:image' content={allSeo.featuredImage} />
          <meta name='image' content={allSeo.featuredImage} />
        </>
      )}
      {allSeo.article && <meta property='og:type' content='article' />}
      <meta name='twitter:card' content='summary_large_image' />
    </Head>
  );
};

export default SEO;
