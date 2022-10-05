import React from "react";
import style from "./Post.module.css";
import Image from "next/future/image";

const PostImage = ({ src, height }) => {
  return (
    <div className={style.customPostImage} style={{ height }}>
      <Image
        src={src}
        width={620}
        height={322}
        style={{
          maxWidth: "100%",
          height: "100%",
          borderRadius: "5px",
          objectFit: "cover",
        }}
      />
    </div>
  );
};
export default PostImage;
