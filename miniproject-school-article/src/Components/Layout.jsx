import { Outlet } from "react-router-dom";
import { ArticleFooter } from "./ArticleFooter";
import { ArticleHeader } from "./ArticleHeader";

export const Layout = () => {
  return (
    <>
      <ArticleHeader />
      <Outlet />
      <ArticleFooter />
    </>
  );
};
