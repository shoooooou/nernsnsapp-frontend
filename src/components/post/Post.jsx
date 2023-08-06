import "./Post.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { format } from "timeago.js";

import { MoreVert } from "@mui/icons-material";
// import { Users } from "../../dummyData";
export default function Post({ post }) {
  const [like, setlike] = useState(post.likes.length);
  const [islike, setIslike] = useState(false);
  const [user, setUser] = useState([]);
  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(
        `http://localhost:4000/api/users?userId=${post.userId}`
      );
      setUser(response.data);
    };
    fetchUser();
  }, [post.userId]);
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;

  const onclickCountLike = () => {
    setlike(islike ? like - 1 : like + 1);
    setIslike(!islike);
  };
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src={
                user.profilePicture || PUBLIC_FOLDER + "/person/noAvatar.png"
              }
              alt=""
              className="postProfileImg"
            />
            <span className="postUsername">{user.username}</span>
            <span className="postDate">{format(post.createdAt)}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post.desc}</span>
          <img src={PUBLIC_FOLDER + post.img} alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              src="/assets/heart.png"
              alt=""
              className="likeIcon"
              onClick={onclickCountLike}
            />
            <span className="postLikeCounter">
              {like}人がいいねを押しました。
            </span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment}:コメント</span>
          </div>
        </div>
      </div>
    </div>
  );
}
