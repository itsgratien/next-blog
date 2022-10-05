import React from "react";

const Heading = ({ title }) => {
  return (
    <div>
      <style jsx>{`
        div {
          width: 620px;
          margin: auto;
          font-size: 20px;
          font-weight: bold;
          padding-top: 30px;
        }
      `}</style>
      {title}
    </div>
  );
};

export default Heading;
