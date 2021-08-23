import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import MainLayout from "../layout/MainLayout";
import styles from "../styles/SearchPage.module.scss";
import { IRecipe } from "../interfaces/IRecipe";
import { client } from "../utils/contentful_api";

const SearchPage = () => {
  const { query } = useRouter();
  const [searchResults, setSearchResults] = useState<IRecipe[]>();

  useEffect(() => {
    const getData = async () => {
      const res = await client.getEntries({ "fields.name": query.term });
      console.log(res);
    };
    getData();
  });

  return (
    <MainLayout title={`Search: ${query.term}`}>
      <div className={styles.wrapper}>Search term: {query.term}</div>
    </MainLayout>
  );
};

export default SearchPage;
