import { useQuery } from "@apollo/client";
import { Spinner } from "flowbite-react";
import { useEffect } from "react";
import Moment from "react-moment";
import { useParams } from "react-router-dom";
import { GET_ARTICLE } from "../Apollo/GraphQL/Query/GetAllArticle";

export const ArticleDetail = () => {
  const params = useParams();
  const setId = params.id;

  const { data: getArticleData, loading } = useQuery(GET_ARTICLE, {
    variables: {
      id: setId,
    },
  });
  console.log(getArticleData);

  useEffect(() => {
    document.title =
      getArticleData?.miniProject_artikel[0].artikel_title +
      " - " +
      getArticleData?.miniProject_artikel[0].author;
  }, [getArticleData]);

  if (loading) {
    <div className="flex flex-col items-center justify-center min-h-[500px] text-center ">
      <Spinner size="xl" />
    </div>;
  }

  return (
    <>
      <div className="py-16 bg-white container">
        <div className="m-auto px-6 md:px-12 xl:px-6">
          <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div className="w-full text-justify min-h-[300px]">
              <h2 className="text-2xl font-bold md:text-4xl">
                {getArticleData?.miniProject_artikel[0].artikel_title}
              </h2>
              <div className="flex justify-between mt-5">
                <p className="text-lg  italic">
                  <span className="font-bold">Oleh : </span>
                  {getArticleData?.miniProject_artikel[0].author}
                </p>
                <p className="text-end ">
                  <Moment format="Do MMMM YYYY">
                    {getArticleData?.miniProject_artikel[0].created_at}
                  </Moment>
                </p>
              </div>
              <p className="mt-6">
                {getArticleData?.miniProject_artikel[0].artikel_content}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
