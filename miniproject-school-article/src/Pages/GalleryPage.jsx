import { useEffect } from "react";

export const GalleryPage = () => {
  useEffect(() => {
    document.title = "Galeri SD Negeri Lokasari";
  }, []);
  return (
    <>
      <div className="container bg-slate-400">
        <h1 className="text-3xl font-roboto text-white py-4 px-4">Galeri</h1>
      </div>
      <div className="container mx-auto flex flex-wrap gap-7 w-auto justify-center py-7">
        <div className="shadow-lg">
          <img
            src="https://source.unsplash.com/600x400"
            alt="ImageGallery"
            className="w-96 rounded-md"
          />
        </div>
        <div className="shadow-lg ">
          <img
            src="https://source.unsplash.com/600x400"
            alt="ImageGallery"
            className="w-96 rounded-md "
          />
        </div>
        <div className="shadow-lg ">
          <img
            src="https://source.unsplash.com/600x400"
            alt="ImageGallery"
            className="w-96 rounded-md "
          />
        </div>
        <div className="shadow-lg ">
          <img
            src="https://source.unsplash.com/600x400"
            alt="ImageGallery"
            className="w-96 rounded-md "
          />
        </div>
        <div className="shadow-lg ">
          <img
            src="https://source.unsplash.com/600x400"
            alt="ImageGallery"
            className="w-96 rounded-md "
          />
        </div>
        <div className="shadow-lg ">
          <img
            src="https://source.unsplash.com/600x400"
            alt="ImageGallery"
            className="w-96 rounded-md "
          />
        </div>
      </div>
    </>
  );
};
