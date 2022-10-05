import React from "react";
import style from "./Header.module.css";
import Link from "next/link";

const items = [
  { name: "using ssr", uri: "/" },
  { name: "using csr", uri: "/csr" },
  { name: "using ssg", uri: "/ssg" },
];
const Menu = () => {
  return (
    <div className={style.menu}>
      <ul>
        {items.map((item) => (
          <li key={item.uri}>
            <Link href={item.uri}>
              <a>{item.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Menu;
