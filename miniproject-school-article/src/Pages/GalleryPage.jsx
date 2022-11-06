import { useSubscription } from "@apollo/client";
import { Spinner } from "flowbite-react";
import { Helmet } from "react-helmet";
import { GET_SUBSCRIPTION_GALLERY } from "../Apollo/GraphQL/Subscription/GetSubscriptionGallery";

export const GalleryPage = () => {
  const {
    data: subsGallery,
    loading: subsLoadingGallery,
    error: subsErrorGallery,
  } = useSubscription(GET_SUBSCRIPTION_GALLERY);

  console.log(subsGallery);

  if (subsLoadingGallery)
    return (
      <div className="flex flex-col items-center justify-center min-h-[500px] text-center ">
        <Spinner size="xl" />
      </div>
    );

  if (subsErrorGallery) return <p>Error :(</p>;

  return (
    <>
      <Helmet>
        <title>Galeri | SD Negeri Lokasari</title>
      </Helmet>
      <div className="container bg-slate-400">
        <h1 className="text-3xl font-roboto text-white py-4 px-4">Galeri</h1>
      </div>
      <div className="container mx-auto flex flex-wrap gap-7 w-auto justify-center py-7 ">
        {subsGallery?.miniProject_galeri.map((items) => (
          <div className="shadow-lg" key={items.id}>
            <img
              src={items.image}
              alt="ImageGallery"
              className="rounded-md max-w-sm max-h-64"
            />
          </div>
        ))}
      </div>
    </>
  );
};
