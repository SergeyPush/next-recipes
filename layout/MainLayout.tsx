import Navbar from "./Navbar";
import SEO from "../next-seo.config";
import { DefaultSeo } from "next-seo";

interface MainLayoutProps {
  title: string;
}

const MainLayout = ({ children, title }) => {
  const PageSEO = {
    ...SEO,
    title,
  };
  return (
    <>
      <DefaultSeo {...PageSEO} />
      <Navbar />
      {children}
    </>
  );
};

export default MainLayout;
