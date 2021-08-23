import styles from "../styles/Favorites.module.scss";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as empty } from "@fortawesome/free-regular-svg-icons";
import { faHeart as filled } from "@fortawesome/free-solid-svg-icons";

interface FavoritesProps {
  isFavorite: boolean;
  addToFavorites: () => void;
}

const Favorites: React.FC<FavoritesProps> = ({
  isFavorite,
  addToFavorites,
}) => {
  return (
    <>
      {isFavorite ? (
        <FontAwesomeIcon
          icon={filled}
          className={styles.filled}
          onClick={addToFavorites}
        />
      ) : (
        <FontAwesomeIcon
          icon={empty}
          className={styles.empty}
          onClick={addToFavorites}
        />
      )}
    </>
  );
};

export default Favorites;
