import MainLayout from "../layout/MainLayout";
import { client } from "../utils/contentful_api";
import { IRecipe } from "../interfaces/IRecipe";
import React from "react";
import Card from "../components/Card";
import styles from "../styles/Home.module.scss";
import Showcase from "../components/Showcase";
import Header from "../components/Header";
import Slider from "../components/Slider";

interface HomeProps {
  data: [IRecipe];
}

const Home: React.FC<HomeProps> = ({ data }) => {
  return (
    <>
      <MainLayout title={"Recipes | Home"}>
        <div className={styles.wrapper}>
          <Showcase recipe={data[0]} className={styles.first} />
          <div className={styles.grid}>
            {data.slice(0, 4).map((recipe) => (
              <Card recipe={recipe} key={recipe.slug} />
            ))}
          </div>
        </div>
        <Slider recipes={data} />
      </MainLayout>
    </>
  );
};

export const getStaticProps = async () => {
  const { items } = await client.getEntries();
  const data = items.map((item) => item.fields);

  return { props: { data } };
};

export default Home;
