import React from 'react'
export default function Pagination({ page, setPage, query, setUrl}) {
  
 // console.log(url)

  return (
    
    <div className="pagination">
      <button
        onClick={(event) => {
          event.preventDefault();
          setPage(page+1);
          setUrl(`https://hn.algolia.com/api/v1/search?query=${query}&hitsPerPage=30&page=${page}`);
        }}
      >
        More
      </button>
      
    </div>
  )
}
