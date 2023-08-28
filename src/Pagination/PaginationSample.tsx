import React from 'react';
import Pagination from './Pagination';

const PaginationSample = () => {
    return (
        <Pagination
            nowPage={1}
            totalCount={165}
            pageSize={10}
            onClick={(page: string) =>
                console.log(page)
            }
        />
    )
};

export default PaginationSample;