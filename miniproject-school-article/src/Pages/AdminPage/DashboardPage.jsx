import { faFile, faImage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSubscription } from "@apollo/client";
import { GET_SUBSCRIPTION_GALLERY } from "../../Apollo/GraphQL/Subscription/GetSubscriptionGallery";
import { GET_SUBSCRIPTION_ARTICLE } from "../../Apollo/GraphQL/Subscription/GetSubscriptionArticle";

import { Helmet } from "react-helmet";
import DashboardImage from "../../Assets/img/DashboardImg.jpg";

export const DashboardPage = () => {
  const { data: dataCountGallery } = useSubscription(GET_SUBSCRIPTION_GALLERY);
  const { data: dataCountArticle } = useSubscription(GET_SUBSCRIPTION_ARTICLE);

  const countGallery = dataCountGallery?.miniProject_galeri.length;
  const countArticle = dataCountArticle?.miniProject_artikel.length;

  return (
    <>
      <Helmet>
        <title>Dashboard | Admin SD Negeri Lokasari</title>
      </Helmet>
      <div className="container">
        <div class="flex flex-wrap justify-center">
          <div class="mt-4 w-full lg:w-6/12 xl:w-6/12 px-5 mb-4 ">
            <div class="relative flex flex-col min-w-0 break-words bg-white rounded mb-3 xl:mb-0 shadow-lg">
              <div class="flex-auto p-4">
                <div class="flex flex-wrap">
                  <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                    <h5 class="text-blueGray-400 uppercase font-bold text-md">
                      {" "}
                      Total Article
                    </h5>
                    <span class="font-semibold text-xl text-blueGray-700">
                      {countArticle}
                      <span className="text-sm"> Articles</span>
                    </span>
                  </div>
                  <div class="relative w-auto pl-4 flex-initial">
                    <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full  bg-[#D1BEBE]">
                      <FontAwesomeIcon icon={faFile} size="1x" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class=" mt-4 w-full lg:w-6/12 xl:w-6/12 px-5">
            <div class="relative flex flex-col min-w-0 break-words bg-white rounded mb-4 xl:mb-0 shadow-lg">
              <div class="flex-auto p-4">
                <div class="flex flex-wrap">
                  <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                    <h5 class="text-blueGray-400 uppercase font-bold text-md">
                      Total Gallery
                    </h5>
                    <span class="font-semibold text-xl text-blueGray-700">
                      {countGallery}
                      <span className="text-sm"> Galleries</span>
                    </span>
                  </div>
                  <div class="relative w-auto pl-4 flex-initial">
                    <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full  bg-[#D1BEBE]">
                      <FontAwesomeIcon icon={faImage} size="1x" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div class="mt-4 w-full lg:w-6/12 xl:w-3/12 px-5 hidden">
          <div class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
            <div class="flex-auto p-4">
              <div class="flex flex-wrap">
                <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                  <h5 class="text-blueGray-400 uppercase font-bold text-xs">
                    Sales
                  </h5>
                  <span class="font-semibold text-xl text-blueGray-700">
                    901
                  </span>
                </div>
                <div class="relative w-auto pl-4 flex-initial">
                  <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full  bg-lightBlue-500">
                    <i class="fas fa-users"></i>
                  </div>
                </div>
              </div>
              <p class="text-sm text-blueGray-400 mt-4">
                <span class="text-red-500 mr-2">
                  <i class="fas fa-arrow-down"></i> 1,25%{" "}
                </span>
                <span class="whitespace-nowrap"> Since yesterday </span>
              </p>
            </div>
          </div>
        </div>
        <div class="mt-4 w-full lg:w-6/12 xl:w-3/12 px-5 hidden">
          <div class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
            <div class="flex-auto p-4">
              <div class="flex flex-wrap">
                <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                  <h5 class="text-blueGray-400 uppercase font-bold text-xs">
                    Performance
                  </h5>
                  <span class="font-semibold text-xl text-blueGray-700">
                    51.02%{" "}
                  </span>
                </div>
                <div class="relative w-auto pl-4 flex-initial">
                  <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full  bg-emerald-500">
                    <i class="fas fa-percent"></i>
                  </div>
                </div>
              </div>
              <p class="text-sm text-blueGray-400 mt-4">
                <span class="text-emerald-500 mr-2">
                  <i class="fas fa-arrow-up"></i> 12%{" "}
                </span>
                <span class="whitespace-nowrap"> Since last mounth </span>
              </p>
            </div>
          </div>
        </div> */}
        </div>
        <div className="flex justify-center">
          <img
            src={DashboardImage}
            alt="School Dashboard"
            className="min-w-[400px] max-w-4xl"
          />
        </div>
      </div>
    </>
  );
};
