import React from "react";
import "./index.scss";

import { DOTS, usePagination } from "../../../functions";

const Pagination = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <ul className="pagination-container">
      {currentPage !== 1 && (
        <li className={`pagination-item`} onClick={onPrevious}>
          <div className="arrow left" />
        </li>
      )}
      {paginationRange.map((pageNumber) => {
        if (pageNumber === DOTS) {
          return <li className="pagination-item dots">&#8230;</li>;
        }

        return (
          <li
            className={`pagination-item${
              pageNumber === currentPage ? " selected" : ""
            }`}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
      {currentPage !== lastPage && (
        <li className={`pagination-item`} onClick={onNext}>
          <div className="arrow right" />
        </li>
      )}
    </ul>
  );
};

export default Pagination;
