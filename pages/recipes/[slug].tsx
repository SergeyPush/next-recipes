import React from "react";
import { client } from "../../utils/contentful_api";
import { IRecipe } from "../../interfaces/IRecipe";
import MainLayout from "../../layout/MainLayout";
import Rating from "../../components/Rating";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import ImageComponent from "../../components/ImageComponent";
import styles from "../../styles/RecipePage.module.scss";

interface RecipePageTypes {
  recipe: IRecipe;
}

const RecipePage: React.FC<RecipePageTypes> = ({ recipe }) => {
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

  return (
    <MainLayout title={name}>
      <div className={styles.recipeWrapper}>
        <p>Tags</p>
        <h2>{name}</h2>
        <h3>{subtitle}</h3>

        <span>
          <Rating rating={rating} clasName={styles.rating} />
        </span>
        <ImageComponent
          src={`https://${image.fields.file.url}`}
          height={"700px"}
          width={"600px"}
        />
        <div>{documentToReactComponents(description)}</div>
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
  console.log(res.items[0].fields);

  return { props: { recipe: res.items[0].fields } };
};
export const getStaticPaths = async () => {
  const res = await client.getEntries({
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
