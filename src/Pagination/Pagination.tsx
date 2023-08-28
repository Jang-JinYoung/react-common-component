import React from 'react';
import _ from 'lodash';

interface IPagination {
  style?: string; // className
  totalCount: number; // 총 개수
  pageSize: number; // 몇개 쓸건지
  nowPage: number; // 현재페이지
  onClick: (page: number) => void; // 페이지 클릭 이벤트
}

/*
floor 내림
round 반올림
ceil 올림
*/
const Pagination = (props: any) => {
  const { style, totalCount, pageSize, nowPage, onClick } = props;

  const lastPage = Math.ceil(totalCount / pageSize);
  const page = _.chunk(_.range(1, lastPage + 1), pageSize)

  return (
    <div className="mt-10 is-pagination">

      <span
        className={`is-pagination-first ${nowPage === 1 ? 'disabled' : ''}`}
        onClick={() => onClick(1)}
        role='button'
        aria-disabled={nowPage === 1}
      />

      <span
        className={`is-pagination-prev ${nowPage === 1 ? 'disabled' : ''}`}
        onClick={() => onClick(nowPage - 1)}
        role='button'
        aria-disabled={nowPage === 1}
      />

      {page[(Math.ceil(nowPage / pageSize)) - 1].map((v: number) => (
        <span
          key={v}
          className={`is-pagination-num ${nowPage === v ? 'is-current' : ''}`}
          onClick={() => onClick(v)}
        >
          {v}
        </span>
      ))}

      <span
        className={`is-pagination-next ${nowPage === lastPage ? 'disabled' : ''}`}
        onClick={() => onClick(nowPage + 1)}
        role='button'
        aria-disabled={nowPage === lastPage}
      />

      <span
        className={`is-pagination-last ${nowPage === lastPage ? 'disabled' : ''}`}
        onClick={() => onClick(lastPage)}
        role='button'
        aria-disabled={nowPage === lastPage}
      />

    </div>
  );
};

export default Pagination;
