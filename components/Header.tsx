import React from "react";
import styles from "../styles/Header.module.scss";
import cn from "classnames";

interface HeaderProps {
  title: string;
  size?: "h1" | "h2";
  align?: "center" | "left";
  underline?: boolean;
}

const Header: React.FC<HeaderProps> = ({
  title,
  size = "h1",
  align,
  underline = false,
}) => {
  if (size === "h1") {
    return (
      <h1
        className={cn(styles.h1, {
          [styles.center]: align === "center",
          [styles.underline]: underline === true,
        })}
      >
        {title}
      </h1>
    );
  }
  if (size === "h2") {
    return (
      <h2
        className={cn(styles.h2, {
          [styles.center]: align === "center",
          [styles.underline]: underline === true,
        })}
      >
        {title}
      </h2>
    );
  }
};

export default Header;
