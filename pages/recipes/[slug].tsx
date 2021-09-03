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
import Header from "../../components/Header";
import { BLOCKS } from "@contentful/rich-text-types";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const { url } = node.data.target.fields.file;
        return <ImageComponent src={url} alt={"Inline Image"} />;
      },
    },
  };

  return (
    <MainLayout title={name}>
      <div className={styles.recipeWrapper}>
        <TagComponent tags={tags} />
        <Header title={name} size="h2" underline={true} align="left" />
        <h3 className={styles.subtitle}>{subtitle}</h3>
        <div className={styles.controls}>
          <Rating rating={rating} className={styles.rating} />
          <Favorites
            isFavorite={isFavorite}
            addToFavorites={() => addToFavorites()}
          />
        </div>
        <ImageComponent src={image.fields.file.url} alt={name} />
        <p className={styles.cooking}>
          <FontAwesomeIcon icon={faClock} /> {time} min cooking time
        </p>
        <RichText text={description} options={options} />
        <h3>Ingredients:</h3>
        <RichText text={ingredients} />
      </div>
    </MainLayout>
  );
};

export default RecipePage;

export const getStaticProps = async ({ params, locale }) => {
  const res = await client.getEntries({
    content_type: "recipie",
    "fields.slug": params.slug,
    locale,
  });

  return { props: { recipe: res.items[0].fields } };
};
export const getStaticPaths = async ({ locales }) => {
  const res: any = await client.getEntries({
    content_type: "recipie",
  });

  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  let pathsWithLocales;
  for (let locale of locales) {
    pathsWithLocales = paths.map((item) => ({ ...item, locale }));
  }
 
  return {
    paths: pathsWithLocales,
    fallback: true,
  };
};
