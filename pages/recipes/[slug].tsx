import React from "react";
import { client } from "../../utils/contentful_api";
import { IRecipe } from "../../interfaces/IRecipe";
import MainLayout from "../../layout/MainLayout";
import Rating from "../../components/Rating";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

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
      <p>Tags</p>
      <h2>{name}</h2>
      <h3>{subtitle}</h3>

      <span>
        <Rating rating={rating} />
      </span>
      <Image
        src={`https://${image.fields.file.url}`}
        width={640}
        height={480}
      />
      <div>{documentToReactComponents(description)}</div>
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
