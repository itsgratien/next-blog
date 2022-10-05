import React from "react";
import style from "./Header.module.css";
import Image from "next/future/image";
import Link from "next/link";
import Menu from "./Menu";

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.container}>
        <div className={style.logo}>
          <Image src="/logo.png" width={30} height={30} alt="logo" />
          <div className={style.logoTitle}>Next Blog</div>
          <div className={style.subTitle}>Built With Next JS</div>
        </div>
        <div className={style.left}>
          <Menu />
          <div className={style.newPost}>
            <Link href={"/home"}>
              <a>
                <span>New Post</span>
                <button type="button">+</button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
