import styles from "../styles/Navbar.module.scss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faSeedling } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import cn from "classnames";
import { useState } from "react";
import Search from "../components/Search";
import HamburgerMenu from "react-hamburger-menu";
import MobileMenu from "./MobileMenu";
import LocaleSwitcher from "../components/LocaleSwitcher";
import { useLocale } from "../hooks/useLocale";

const Navbar = () => {
  const router = useRouter();
  const [searchActive, setSearchActive] = useState<boolean>(false);
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);
  const { t } = useLocale();

  return (
    <div>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <Link href={"/"}>
            <a>
              <span>
                <FontAwesomeIcon
                  icon={faSeedling}
                  className={styles.logoColor}
                />
              </span>{" "}
              Recipes
            </a>
          </Link>
        </div>
        {menuIsOpen && <MobileMenu menuIsOpen={setMenuIsOpen} />}
        <div className={styles.links}>
          <Link href={"/"}>
            <a
              className={cn(styles.link, {
                [styles.active]: router.pathname === "/",
              })}
            >
              {t.header.home}
            </a>
          </Link>
          <Link href={"/recipes"}>
            <a
              className={cn(styles.link, {
                [styles.active]: router.pathname === "/recipes",
              })}
            >
              {t.header.recipes}
            </a>
          </Link>
          <Link href={"/favorites"}>
            <a
              className={cn(styles.link, {
                [styles.active]: router.pathname === "/favorites",
              })}
            >
              {t.header.favorites}
            </a>
          </Link>
        </div>
        <div className={styles.controls}>
          {searchActive && <Search setSearchActive={setSearchActive} />}
          <>
            <LocaleSwitcher />
            <FontAwesomeIcon
              icon={faSearch}
              className={cn(styles.icon, styles.search)}
              onClick={() => setSearchActive(true)}
            />
            <FontAwesomeIcon icon={faUser} className={styles.icon} />
            <HamburgerMenu
              menuClicked={() => {
                setMenuIsOpen((prevState) => !prevState);
              }}
              isOpen={menuIsOpen}
              width={36}
              height={24}
              strokeWidth={3}
              color="white"
              className={styles.burger}
              animationDuration={0.2}
            />
          </>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
