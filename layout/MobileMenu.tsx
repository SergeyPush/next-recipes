import React from "react";
import styles from "../styles/MobileMenu.module.scss";
import Link from "next/link";
import cn from "classnames";
import { useRouter } from "next/router";

interface MobileMenuProps {
  menuIsOpen:React.Dispatch<React.SetStateAction<boolean>>
}

const MobileMenu:React.FC<MobileMenuProps> = ({menuIsOpen}) => {
  const router = useRouter();

  const handleBackdropClick = ()=>{
    menuIsOpen(false)
  }

  return (
    <div className={styles.backdrop} onClick={handleBackdropClick}>
      <div className={styles.wrapper}>
        <Link href={"/"}>
          <a
            className={cn(styles.link, {
              [styles.active]: router.pathname === "/",
            })}
          >
            Home
          </a>
        </Link>
        <Link href={"/recipes"}>
          <a
            className={cn(styles.link, {
              [styles.active]: router.pathname === "/recipes",
            })}
          >
            Recipes
          </a>
        </Link>
        <Link href={"/favorites"}>
          <a
            className={cn(styles.link, {
              [styles.active]: router.pathname === "/favorites",
            })}
          >
            Favorites
          </a>
        </Link>
      </div>
    </div>
  );
};

export default MobileMenu;
