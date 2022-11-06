import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "../Components/Layout";
import { HomePage } from "../Pages/HomePage";
import { ArticlePage } from "../Pages/ArticlePage";
import { GalleryPage } from "../Pages/GalleryPage";
import { NotFound } from "../Pages/NotFound";
import {
  AddArticlePage,
  AddGalleryPage,
  EditArticlePage,
  EditGalleryPage,
} from "../Pages/AdminPage";
import { DashboardPage } from "../Pages/AdminPage/DashboardPage";
import { ArticleDetail } from "../Components/ArticleDetail";
import { MainArticlePage } from "../Pages/AdminPage/Article/MainArticlePage";
import { LoginPage } from "../Pages/LoginPage";
import { PrivateRoute } from "./PrivateRoute";

const SetupRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/article">
            <Route index element={<ArticlePage />} />
            <Route path="/article/:id" element={<ArticleDetail />} />
          </Route>
          <Route path="/gallery" element={<GalleryPage />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/secret-admin" element={<DashboardPage />} />
          <Route
            path="/secret-admin/mainArticlePage"
            element={<MainArticlePage />}
          />
          <Route path="/secret-admin/addArticle" element={<AddArticlePage />} />
          <Route
            path="/secret-admin/editArticle/:id"
            element={<EditArticlePage />}
          />
          <Route path="/secret-admin/addGallery" element={<AddGalleryPage />} />
          <Route
            path="/secret-admin/editGallery"
            element={<EditGalleryPage />}
          />
        </Route>

        <Route path="/loginPage" element={<LoginPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default SetupRoutes;
