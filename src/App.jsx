import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Navigator from "./components/Navigator";
import PostList from "./components/PostList";
import Pagination from "./components/Pagination";
import Footer from "./components/Footer";
import { SpinnerRoundOutlined } from "spinners-react";

function App() {
  const [posts, setPosts] = useState([]);
  const [query, setQuery] = useState("react");
  const [isLoading, setIsLoading] = useState(true);
  const[page, setPage]  = useState(0)
  const [url, setUrl] = useState(`https://hn.algolia.com/api/v1/search?query=${query}&hitsPerPage=30&page=${page}`);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(url) 
      .then((response) => {
        setPosts(response.data.hits);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error Fetching Posts", error);
        setIsLoading(false);
      });
  }, [url]);
  return (
    <div className="App">
      <Navigator />
      {isLoading ? (
        <div className="spinner-container">
          <div className="spinner">
            <SpinnerRoundOutlined />
          </div>
        </div>
      ) : (
        <>
          <PostList posts={posts} page={page} />
          <Pagination page={page} setPage={setPage} query={query} setUrl={setUrl} />
          <Footer page={page} query={query} setQuery={setQuery} setUrl={setUrl} />
        </>
      )}
    </div>
  );
}

export default App;
