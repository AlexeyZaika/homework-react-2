import React from 'react';
import PropTypes from 'prop-types';

function Pagination(props) {
  const isDisabledNext = props.currentPage === props.numberPages;
  const isDisabledPrev = props.currentPage === 1;
  const pageNumbers =[]

  for (let i = 1; i <= props.numberPages; i++) {
      pageNumbers.push(i);
  }

  return (
    <div className="article__pagination">
      <button className="article__button" type="button" onClick={() => props.paginate(props.currentPage - 1)} disabled={isDisabledPrev}>Prev</button>
      {
        pageNumbers.map(num => <button key = {num} className="article__button" type="button" onClick={() => props.paginate(num)}>{num}</button>)
      }
      <button className="article__button" type="button" onClick={() => props.paginate(props.currentPage + 1)} disabled={isDisabledNext}>Next</button>
    </div>
  );
}

Pagination.propTypes = {
  paginate: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  numberPages: PropTypes.number.isRequired,
}

export default Pagination;

