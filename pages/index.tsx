import MainLayout from "../layout/MainLayout";
import { client } from "../utils/contentful_api";
import { IRecipe } from "../interfaces/IRecipe";
import React from "react";
import Card from "../components/Card";

interface HomeProps {
  data: [IRecipe];
}

const Home: React.FC<HomeProps> = ({ data }) => {
  console.log(data);
  return (
    <>
      <MainLayout title={"Recipes | Home"}>
        <h1>This is home page</h1>
        {data.map((recipe) => (
          <Card recipe={recipe} key={recipe.slug} />
        ))}
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
