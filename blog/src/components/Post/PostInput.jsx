import React from "react";
import style from "./Post.module.css";

const PostInput = ({ onChange, value, name, labelName, placeholder }) => {
  return (
    <div className={style.postInput}>
      <label>{labelName}</label>
      <input
        type="text"
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};
export default PostInput;
