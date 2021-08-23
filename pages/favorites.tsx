import React from "react";
import MainLayout from "../layout/MainLayout";
import { useFavorites } from "../hooks/useFavorites";
import Card from "../components/Card";

const Favorites = () => {
  const { favorites } = useFavorites(null);
  console.log(favorites);

  return (
    <MainLayout title={"Favorites"}>
      {favorites.map((fav) => (
        <Card key={fav.slug} recipe={fav} />
      ))}
    </MainLayout>
  );
};

export default Favorites;
