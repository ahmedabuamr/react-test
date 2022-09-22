import React from 'react'



const Pagination = ({
    setPage,
    page
}) => {
    let currentPages = [1,2,3,4,5,6,7,8,9,10];

   
    return (
        <div className='pagination'>
            {currentPages.map((pages, index) => {
                return (
                    <button
                        key={index}
                        onClick={() => setPage(page + 1)}
                      >
                        {pages}
                    </button>
                );
            })}
        </div>
    );
};


export default Pagination;
