import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { PaginationWrapper } from '../../styles/components/pagination';

const Pagination = ({
  isFirst,
  isLast,
  currentPage,
  numPages,
  prevPage,
  nextPage,
}) => {
  const router = useRouter();

  const handlePagination = page => {
    const path = router.pathname;
    const query = router.query;
    query.page = page.selected + 1;
    router.push({
      pathname: path,
      query,
    });
  };

  if (numPages > 1) {
    return (
      <PaginationWrapper>
        {!isFirst && (
          <Link
            href={{
              pathname: `/page/${prevPage}`,
            }}
          >
            Página anterior
          </Link>
        )}
        <p>
          {currentPage} de {numPages}
        </p>
        {!isLast && (
          <Link
            href={{
              pathname: `/page/${nextPage}`,
            }}
          >
            Próxima página
          </Link>
        )}
      </PaginationWrapper>
    );
  } else {
    return <></>;
  }
};

export default Pagination;
