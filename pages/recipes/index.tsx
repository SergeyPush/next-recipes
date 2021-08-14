import React from "react";
import MainLayout from "../../layout/MainLayout";
import { client } from "../../utils/contentful_api";
import { IRecipe } from "../../interfaces/IRecipe";
import styles from "../../styles/RecipesPage.module.scss";
import Card from "../../components/Card";
import Header from "../../components/Header";

interface RecipesProps {
  recipes: [IRecipe];
}

const RecipesPage = ({ recipes }) => {
  return (
    <MainLayout title={"Recipes"}>
      <Header title={"Our Recipes"} />
      <div className={styles.wrapper}>
        {recipes.map((recipe) => (
          <Card recipe={recipe} key={recipe.slug} />
        ))}
      </div>
    </MainLayout>
  );
};

export const getStaticProps = async () => {
  const { items } = await client.getEntries();
  const data = items.map((item) => item.fields);

  return { props: { recipes: data } };
};

export default RecipesPage;
