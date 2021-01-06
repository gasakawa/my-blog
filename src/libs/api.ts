import fs from 'fs';
import { join, resolve } from 'path';
import matter from 'gray-matter';

const postsDirectory = resolve('posts');

interface Post {
  title: string;
  date: string;
  slug: string;
  image: string;
  description: string;
  category: string;
  background: string;
  keywords: string;
  readingTime: string;
}

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data: metadata, content } = matter(fileContents);

  const items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach(field => {
    if (field === 'slug') {
      items[field] = realSlug;
    }
    if (field === 'content') {
      items[field] = content;
    }

    if (metadata[field]) {
      items[field] = metadata[field];
    }
  });

  return items as Post;
}

export function getAllPosts(fields = []) {
  const slugs = getPostSlugs();
  const posts = slugs
    .map(slug => getPostBySlug(slug, fields))
    .sort((post1, post2) =>
      new Date(post1.date) > new Date(post2.date) ? '-1' : '1',
    );
  return posts;
}
