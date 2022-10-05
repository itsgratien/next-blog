import React from "react";
import style from "./Post.module.css";
import PostImage from "./PostImage";
import PostDescription from "./PostDescription";

const PostDetail = () => {
  return (
    <div className={style.postDetail}>
      <div className={style.postTitle}>How I Joined Dev Junction attended</div>
      <div className={style.postDate}>PUBLISHED ON JUNE 26TH 2022</div>
      <PostImage
        height={"auto"}
        src="https://images.unsplash.com/photo-1545665277-5937489579f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      />
      <PostDescription
        description={`Lorem ipsum rwanda lorem ipsum Lorem ipsum rwanda lorem ipsum Lorem
          ipsum rwanda lorem ipsum Lorem ipsum rwanda lorem ipsum Lorem ipsum
          rwanda lorem ipsum Lorem ipsum rwanda lorem ipsum`}
        width="550px"
      />
    </div>
  );
};
export default PostDetail;
