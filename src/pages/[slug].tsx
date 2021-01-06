import React from 'react';
import { useRouter } from 'next/router';

const Slug = () => {
  const router = useRouter();
  return (
    <div>
      <h1>{router.query.slug}</h1>
    </div>
  );
};

export default Slug;
