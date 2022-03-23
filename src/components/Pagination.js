import React from 'react'

const Pagination = ({postsPerPage, totalPosts, paginate}) => {

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil( totalPosts/ postsPerPage); i++){
        pageNumbers.push(i);
    }

  return (
    <nav>
        <ul className='pagination'>
            {pageNumbers.map( n => (
                <li className='page-item' key={n}>
                    <a href="!#" onClick={() => paginate(n)} className='page-link'>
                        {n}
                    </a>
                </li>
            ))}
        </ul>
    </nav>
  );
};

export default Pagination;