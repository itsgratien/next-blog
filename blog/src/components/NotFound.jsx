import React from "react";

const NotFound = ({ message }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontWeight: "bold",
      }}
    >
      {message || "Not Result Found"}
    </div>
  );
};
export default NotFound;
