import React from "react";
import style from "./Post.module.css";
import PostImage from "./PostImage";
import PostDescription from "./PostDescription";

const PostDetail = ({ item }) => {
  if (!item) {
    return null;
  }
  return (
    <div className={style.postDetail}>
      <div className={style.postTitle}>{item.title}</div>
      <div className={style.postDate}>
        PUBLISHED ON {new Date(item.createdAt).toDateString()}
      </div>
      <PostImage height={"auto"} src={item.image} />
      <PostDescription description={item.description} width="500px" />
    </div>
  );
};
export default PostDetail;
