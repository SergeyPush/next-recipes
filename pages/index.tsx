import MainLayout from "../layout/MainLayout";
import { client } from "../utils/contentful_api";

export default function Home({ data }) {
  console.log(data[0]);
  return (
    <>
      <MainLayout title={"Recipes | Home"}>This is home page</MainLayout>
    </>
  );
}

export const getStaticProps = async () => {
  const { items } = await client.getEntries();
  const data = items.map((item) => item.fields);

  return { props: { data } };
};
