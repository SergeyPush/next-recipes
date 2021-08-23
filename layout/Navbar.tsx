import styles from "../styles/Navbar.module.scss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faSeedling } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import cn from "classnames";

const Navbar = () => {
  const router = useRouter();

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

        <div className={styles.links}>
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
        <div>
          <FontAwesomeIcon icon={faSearch} className={styles.icon} />
          <FontAwesomeIcon icon={faUser} className={styles.icon} />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
