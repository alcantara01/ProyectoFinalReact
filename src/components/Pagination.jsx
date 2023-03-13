import React from 'react';
import PropTypes from 'prop-types';

function Pagination({ totalPosts, postsPerPage, setCurrentPage }) {
  const pages = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i += 1) {
    pages.push(i);
  }
  return (
    <div>
      {
            pages.map((page) => (
              <button
                type="button"
                key={page}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            ))
        }
    </div>
  );
}
Pagination.propTypes = {
  totalPosts: PropTypes.number.isRequired,
  postsPerPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
};

export default Pagination;
