import { useState, useEffect, useCallback } from "react";
import { IRecipe } from "../interfaces/IRecipe";

export const useFavorites = (recipe: IRecipe | null) => {
  const [favorites, setFavorites] = useState<IRecipe[]>([]);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const FAVORITES = "favorites";

  useEffect(() => {
    const favoritesList = localStorage.getItem(FAVORITES);
    setFavorites(JSON.parse(favoritesList));
  }, [setFavorites]);

  useEffect(() => {
    if (recipe && isInFavorites()) {
      setIsFavorite(true);
    }
  }, [favorites]);

  const isInFavorites = () => {
    return !!favorites.find((fav) => fav.slug === recipe.slug);
  };

  const addToFavorites = () => {
    if (isInFavorites()) {
      const updatedList = favorites.filter((fav) => fav.slug !== recipe.slug);
      setFavorites(updatedList);
      setIsFavorite(false);
      localStorage.setItem(FAVORITES, JSON.stringify(updatedList));
    } else {
      favorites.push(recipe);
      setIsFavorite(true);
      localStorage.setItem(FAVORITES, JSON.stringify(favorites));
    }
  };

  return { isFavorite, addToFavorites, favorites };
};
