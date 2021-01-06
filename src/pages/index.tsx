import { getAllPosts } from '../libs/api';

export default function Home() {
  return <div></div>;
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'image',
    'description',
    'category',
  ]);

  //console.log(allPosts);

  return {
    props: { allPosts },
  };
}
