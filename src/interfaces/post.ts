import Category from './category';
import Tag from './tag';

export default interface Post {
  id: string;
  title: string;
  excerpt: string;
  slug: string;
  content: string;
  creation_date: Date;
  category: Category;
  tags: Tag[];
  featured_image: {
    name: string;
    url: string;
    formats: {
      thumbnail: {
        name: string;
        url: string;
      };
      large: {
        name: string;
        url: string;
      };
      medium: {
        name: string;
        url: string;
      };
      small: {
        name: string;
        url: string;
      };
    };
  };
}

export type PostLink = {
  title: string;
  slug: string;
};
