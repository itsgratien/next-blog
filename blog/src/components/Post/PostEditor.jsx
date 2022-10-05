import React from "react";
import style from "./Post.module.css";

const PostEditor = ({ onChange, value }) => {
  return (
    <div className={style.postEditor}>
      <label htmlFor="">Description</label>
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        value={value}
        onChange={onChange}
        placeholder="Description"
      ></textarea>
    </div>
  );
};

export default PostEditor;
