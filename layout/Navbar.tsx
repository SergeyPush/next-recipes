import styles from "../styles/Navbar.module.scss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faSeedling } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <span>
            <FontAwesomeIcon icon={faSeedling} />
          </span>{" "}
          Recipes
        </div>
        <div className={styles.links}>
          <Link href={"/"}>
            <a className={styles.link}>Home</a>
          </Link>
          <Link href={"/recipes"}>
            <a className={styles.link}>Recipes</a>
          </Link>
          <Link href={"/about"}>
            <a className={styles.link}>About Us</a>
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
