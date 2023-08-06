import React, { useEffect, useState } from "react";
import "./Timeline.css";

import Post from "../post/Post";
import Share from "../share/Share";
import axios from "axios";
// import {Posts} from "../../dummyData"

export default function Timeline({ username }) {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const response = username
        ? await axios.get(`http://localhost:4000/api/posts/profile/${username}`)
        : await axios.get(
            "http://localhost:4000/api/posts/timeline/64bca65f5ae6a942adffe408"
          );
      setPosts(response.data);
    };
    fetchPosts();
  }, [username]);
  return (
    <div className="timeline">
      <div className="timelineWrapper">
        <Share />
        {posts.map((post) => (
          <Post post={post} key={post._id} />
        ))}
      </div>
    </div>
  );
}
