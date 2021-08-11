import Navbar from "./Navbar";
import SEO from "../next-seo.config";
import { DefaultSeo } from "next-seo";
import styles from "../styles/MainLayout.module.scss";
import React from "react";

interface MainLayoutProps {
  title: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, title }) => {
  const PageSEO = {
    ...SEO,
    title,
  };
  return (
    <>
      <DefaultSeo {...PageSEO} />
      <Navbar />
      <div className={styles.wrapper}>{children}</div>
    </>
  );
};

export default MainLayout;
