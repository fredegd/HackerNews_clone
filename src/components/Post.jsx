import React from "react";
import { useState, useEffect } from "react";

export default function Post({ post }) {
  const [howLongAgo, setHowLongAgo] = useState("");

  useEffect(() => {
    // Calculate the age of the post
    const postCreatedAt = new Date(post.created_at).getTime();
    const currentTime = Date.now();
    const timeDifference = currentTime - postCreatedAt;

    // Convert milliseconds to minutes, hours, or days
    const minutes = Math.floor(timeDifference / (1000 * 60));
    const hours = Math.floor(timeDifference / (1000 * 60 * 60));
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    // Set the appropriate string based on the age
    let timeString;
    if (days > 0) {
      timeString = `${days} day${days > 1 ? "s" : ""} ago`;
    } else if (hours > 0) {
      timeString = `${hours} hour${hours > 1 ? "s" : ""} ago`;
    } else {
      timeString = `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
    }

    setHowLongAgo(timeString);
  }, [post.created_at]);

  return (
    <li>
      <div>
        
        <a href={post.vote}>.{"∆  "}</a>
        <a href={post.url}>{post.title}</a>
      </div>
      <div className="postInfo">
        {post.points} points by {post.author} {howLongAgo} hide | past | discuss
      </div>
    </li>
  );
}
