import React from "react";
import MainLayout from "../layout/MainLayout";
import { useFavorites } from "../hooks/useFavorites";
import Card from "../components/Card";
import Header from "../components/Header";
import styles from "../styles/FavoritesPage.module.scss";

const Favorites = () => {
  const { favorites } = useFavorites(null);

  return (
    <MainLayout title={"Favorites"}>
      {!favorites.length ? (
        <Header title={"You don't have favorites right now"} />
      ) : (
        <Header title={"Your favorite recipes"} />
      )}
      <div className={styles.wrapper}>
        {favorites.length > 0 &&
          favorites.map((fav) => <Card key={fav.slug} recipe={fav} />)}
      </div>
    </MainLayout>
  );
};

export default Favorites;
