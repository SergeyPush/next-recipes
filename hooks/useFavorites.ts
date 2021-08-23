import { useState, useEffect } from "react";
import { IRecipe } from "../interfaces/IRecipe";

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<IRecipe[]>();
  const FAVORITES = "favorites";
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem(FAVORITES)) || [];
    setFavorites(storedFavorites);
  });

  const addToFavorites = (recipe: IRecipe) => {
    favorites.push(recipe);
  };
  const removeFromFavorites = (recipe: IRecipe) => {
    const updatedList = favorites.filter(
      (favorite) => favorite.slug !== recipe.slug
    );
    setFavorites(updatedList);
  };
  const isFavorite = (recipe: IRecipe) => {
    return favorites.find((fav) => fav.slug === recipe.slug);
  };

  return { isFavorite, addToFavorites, removeFromFavorites };
};
