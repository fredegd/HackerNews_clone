import React from 'react'
import Post from "./Post";

export default function PostList({ posts, page}) {

  // // Sort the posts by age
  //  const sortedPosts = posts.sort((a, b) => {
  //   const aCreatedAt = new Date(a.created_at).getTime();
  //   const bCreatedAt = new Date(b.created_at).getTime();
  //   return bCreatedAt - aCreatedAt;
  // });
  // console.log(sortedPosts.id)
  return (
    <ol start={page<=1? 1: 30*(page)+1 } className='post-list'>
      {posts.map((post)=>{
        return (<Post key={post.objectID} post={post}/>)
      })}

    </ol>
  )
}
