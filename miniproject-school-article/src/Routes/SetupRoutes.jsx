import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "../Components/Layout";
import { HomePage } from "../Pages/HomePage";
import { ArticlePage } from "../Pages/ArticlePage";
import { GalleryPage } from "../Pages/GalleryPage";
import { NotFound } from "../Pages/NotFound";
import { AdminHeader } from "../Components/Admin/AdminHeader";
import {
  AddArticlePage,
  AddGalleryPage,
  EditArticlePage,
  EditGalleryPage,
} from "../Pages/AdminPage";

const SetupRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/article">
            <Route index element={<ArticlePage />} />
            <Route path="/article/:id" element={<ArticlePage />} />
          </Route>
          <Route path="/gallery" element={<GalleryPage />} />
        </Route>
        <Route path="/secret-admin" element={<AdminHeader />} />
        <Route path="/secret-admin/addArticle" element={<AddArticlePage />} />
        <Route path="/secret-admin/editArticle" element={<EditArticlePage />} />
        <Route path="/secret-admin/addGallery" element={<AddGalleryPage />} />
        <Route path="/secret-admin/editGallery" element={<EditGalleryPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default SetupRoutes;
