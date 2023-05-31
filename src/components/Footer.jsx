import React from "react";

export default function Footer({ page, query, setQuery,  setUrl }) {
  console.log(query);

  return (
    <div className="footer">
      <hr />
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setQuery(event.target.value);
          setUrl(
            `https://hn.algolia.com/api/v1/search?query=${query}&hitsPerPage=30&page=${page}`
          );
        }}
      >
        Search:
        <input type="text" placeholder="" onChange={(event)=>setQuery(event.target.value)}/>
      </form>
    </div>
  );
}
