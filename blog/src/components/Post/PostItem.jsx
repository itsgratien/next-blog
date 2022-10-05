import React from "react";
import style from "./Post.module.css";
import Link from "next/link";
import PostImage from "./PostImage";
import PostDescription from "./PostDescription";

const PostItem = ({ item, renderingMethod }) => {
  if (!item) {
    return null;
  }

  const handleSlice = (number, value) => {
    if (value.length <= number) {
      return value;
    } else {
      //
      const newValue = value.slice(0, number);

      return `${newValue} ...`;
    }
  };
  return (
    <div className={style.postItem}>
      <div className={style.container}>
        <PostImage src={item.image} height="300px" />
        <div className={style.postTitle}>{item.title}</div>
        <div className={style.postDate}>
          PUBLISHED ON {new Date(item.createdAt).toDateString()}
        </div>
        <PostDescription description={handleSlice(187, item.description)} />
        <div className={style.readMore}>
          <Link href={`/${renderingMethod}/${item.id}`}>
            <a>Read More</a>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default PostItem;
