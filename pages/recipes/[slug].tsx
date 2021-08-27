import React from "react";
import { client } from "../../utils/contentful_api";
import { IRecipe } from "../../interfaces/IRecipe";
import MainLayout from "../../layout/MainLayout";
import Rating from "../../components/Rating";
import ImageComponent from "../../components/ImageComponent";
import styles from "../../styles/RecipePage.module.scss";
import RichText from "../../components/RichText";
import TagComponent from "../../components/TagComponent";
import Favorites from "../../components/Favorites";
import { useFavorites } from "../../hooks/useFavorites";

interface RecipePageTypes {
  recipe: IRecipe;
}

const RecipePage: React.FC<RecipePageTypes> = ({ recipe }) => {
  if (!recipe) {
    return <MainLayout title={"Not found"}>Page not found</MainLayout>;
  }
  const {
    name,
    description,
    image,
    subtitle,
    ingredients,
    rating,
    price,
    tags,
    time,
  } = recipe;

  const { isFavorite, addToFavorites } = useFavorites(recipe);

  return (
    <MainLayout title={name}>
      <div className={styles.recipeWrapper}>
        <TagComponent tags={tags} />
        <h2 className={styles.title}>{name}</h2>
        <h3 className={styles.subtitle}>{subtitle}</h3>
        <div className={styles.controls}>
          <Rating rating={rating} className={styles.rating} />
          <Favorites
            isFavorite={isFavorite}
            addToFavorites={() => addToFavorites()}
          />
        </div>
        <ImageComponent src={`https://${image.fields.file.url}`} />
        Cooking time: {time}min
        <RichText text={description} />
        <h3>Ingredients:</h3>
        <RichText text={ingredients} />
      </div>
    </MainLayout>
  );
};

export default RecipePage;

export const getStaticProps = async ({ params }) => {
  const res = await client.getEntries({
    content_type: "recipie",
    "fields.slug": params.slug,
  });

  return { props: { recipe: res.items[0].fields } };
};
export const getStaticPaths = async () => {
  const res: any = await client.getEntries({
    content_type: "recipie",
  });

  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return {
    paths,
    fallback: true,
  };
};
