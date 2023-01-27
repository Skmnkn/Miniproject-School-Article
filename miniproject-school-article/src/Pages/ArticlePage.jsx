import { useSubscription } from "@apollo/client";
import { Spinner } from "flowbite-react";
import { Helmet } from "react-helmet";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import { GET_SUBSCRIPTION_ARTICLE } from "../Apollo/GraphQL/Subscription/GetSubscriptionArticle";

export const ArticlePage = () => {
  const {
    loading,
    error,
    data: getArticleData,
  } = useSubscription(GET_SUBSCRIPTION_ARTICLE);

  if (loading)
    return (
      <div className="flex flex-col items-center justify-center min-h-[500px] text-center ">
        <Spinner size="xl" />
      </div>
    );

  if (error) return console.log("error", error);

  return (
    <>
      <Helmet>
        <title>Artikel | SD Negeri Lokasari</title>
      </Helmet>
      <div className="container bg-slate-400 ">
        <h1 className="text-3xl font-roboto text-white py-4 px-4 shadow-md">
          Artikel
        </h1>
      </div>
      <div className="py-5 gap-12 flex flex-wrap justify-center">
        {getArticleData?.miniProject_artikel.map(
          ({ artikel_title, artikel_content, id, updated_at, author }) => (
            <div className="lg:flex-row cursor-pointer" key={id}>
              <div className="max-w-sm hover:bg-slate-200 mx-2 py-3 px-5 rounded-md shadow-md">
                <h1 className="text-2xl font-roboto truncate">
                  {artikel_title}
                </h1>
                <div className="flex flex-row justify-between">
                  <p className="text-sm italic font-roboto py-3 font-bold underline">
                    {author}
                  </p>
                  <p className="italic text-end py-2">
                    <Moment format="Do MMMM YYYY">{updated_at}</Moment>
                  </p>
                </div>
                <p className="font-roboto text-justify line-clamp-5">
                  <Link to={`/article/${id}`}>{artikel_content}</Link>
                </p>
              </div>
            </div>
          )
        )}
      </div>
    </>
  );
};
