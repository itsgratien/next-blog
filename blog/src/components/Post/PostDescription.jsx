import React from "react";
import style from "./Post.module.css";

const PostDescription = ({ description }) => {
  return (
    <div
      className={style.postDescription}
      style={{ width: width, margin: "auto", marginTop: "30px" }}
    >
      {description}
    </div>
  );
};
export default PostDescription;
