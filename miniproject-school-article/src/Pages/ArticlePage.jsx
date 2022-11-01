import { useQuery } from "@apollo/client";
import { Spinner } from "flowbite-react";
import { useEffect } from "react";
import { GET_ARTICLE } from "../Apollo/GraphQL";

export const ArticlePage = () => {
  const { loading, error, data: getArticleData } = useQuery(GET_ARTICLE);
  useEffect(() => {
    document.title = "Artikel SD Negeri Lokasari";
  }, []);

  if (loading)
    return (
      <div className="text-center">
        <Spinner size="xl" />
      </div>
    );

  if (error) return <p>Error :(</p>;
  return (
    <>
      <div className="container bg-slate-400 ">
        <h1 className="text-3xl font-roboto text-white py-4 px-4">Artikel</h1>
      </div>
      <div className="py-3 container gap-12 flex flex-wrap justify-center">
        {getArticleData?.miniProject_artikel.map(
          ({ artikel_title, artikel_content, id }) => (
            <div className="py-7 lg:flex-row cursor-pointer" key={id}>
              <div className="max-w-sm hover:bg-slate-200 p-3 rounded-md">
                <h1 className="text-2xl font-roboto pb-5">{artikel_title}</h1>
                <p className="font-roboto text-justify line-clamp-5">
                  {artikel_content}
                </p>
                <p className="italic text-end">24 Oktober 2022</p>
              </div>
            </div>
          )
        )}
      </div>
    </>
  );
};
