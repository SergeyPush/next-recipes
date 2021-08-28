import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import MainLayout from "../layout/MainLayout";
import styles from "../styles/SearchPage.module.scss";
import { IRecipe } from "../interfaces/IRecipe";
import { client } from "../utils/contentful_api";
import Header from "../components/Header";
import Card from "../components/Card";

const SearchPage = () => {
  const { query } = useRouter();
  const [searchResults, setSearchResults] = useState<IRecipe[]>([]);

  useEffect(() => {
    const getData = async () => {
      const res = await client.getEntries({
        "fields.name[match]": query.term,
        "fields.subtitle[match]": query.term,
        content_type: "recipie",
      });
      const result = res.items.map((item: any) => item.fields);
      setSearchResults(result);
    };

    getData();
  }, [query.term]);

  return (
    <MainLayout title={`Search results: ${query.term}`}>
      <Header title={`Search results: ${query.term}`} align="center" size="h1" underline={true} />
      <div className={styles.wrapper}>
        {searchResults.map((recipe) => (
          <Card recipe={recipe} key={recipe.slug} />
        ))}
      </div>
    </MainLayout>
  );
};

export default SearchPage;
