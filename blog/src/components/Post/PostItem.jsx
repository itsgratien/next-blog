import React from "react";
import style from "./Post.module.css";
import Link from "next/link";
import PostImage from "./PostImage";
import PostDescription from "./PostDescription";

const PostItem = () => {
  return (
    <div className={style.postItem}>
      <div className={style.container}>
        <PostImage
          src={`https://images.unsplash.com/photo-1545665277-5937489579f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80`}
          height="300px"
        />
        <div className={style.postTitle}>
          How I Joined Dev Junction attended
        </div>
        <div className={style.postDate}>PUBLISHED ON JUNE 26TH 2022</div>
        <PostDescription
          description={`Lorem ipsum rwanda lorem ipsum Lorem ipsum rwanda lorem ipsum Lorem
          ipsum rwanda lorem ipsum Lorem ipsum rwanda lorem ipsum Lorem ipsum
          rwanda lorem ipsum Lorem ipsum rwanda lorem ipsum`}
        />
        <div className={style.readMore}>
          <Link href={"/"}>
            <a>Read More</a>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default PostItem;
