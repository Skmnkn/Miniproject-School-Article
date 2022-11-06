import Banner from "../Assets/img/Banner.jpg";
import Banner2 from "../Assets/img/Banner2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrophy,
  faBuilding,
  faUniversity,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { useSubscription } from "@apollo/client";
import Moment from "react-moment";
import { GET_SUBSCRIPTION_ARTICLE_LIMIT } from "../Apollo/GraphQL/Subscription/GetSubscriptionArticleLimit";

export const HomePage = () => {
  const { data: getArticleData } = useSubscription(
    GET_SUBSCRIPTION_ARTICLE_LIMIT
  );

  return (
    <>
      <div
        style={{ backgroundImage: `url(${Banner})` }}
        className="h-[80vh] bg-cover bg-[45%_55%] bg-no-repeat py-[130px] flex flex-col items-center"
      >
        <h1 className="text-2xl text-center text-white uppercase font-roboto font-bold">
          Welcome to SD Negeri Lokasari Website
        </h1>
        <h1 className="text-center text-white text-7xl leading-tight font-bold font-roboto max-w-3xl py-8 tracking-wide">
          Quality, Religious, & Noble Character
        </h1>
      </div>
      <div className="flex justify-evenly py-10 gap-9 container flex-col lg:flex-row">
        <div className="item flex flex-col items-center gap-5">
          <FontAwesomeIcon icon={faTrophy} size="3x" />
          <p className="text-center">
            Setiap kegiatan dan pembelajaran yang dilaksanakan senantiasa
            berorientasi pada peningkatan prestasi siswa-siswi.
          </p>
        </div>
        <div className="item flex flex-col items-center gap-5">
          <FontAwesomeIcon icon={faUniversity} size="3x" />
          <p className="text-center">
            Kurikulum yang dipilih sangat cermat di setiap aspek pertumbuhan dan
            perkembangan ke arah positif.
          </p>
        </div>
        <div className="item flex flex-col items-center gap-5">
          <FontAwesomeIcon icon={faBuilding} size="3x" />
          <p className="text-center">
            Fasilitas-fasilitas memadai disiapkan untuk mendukung setiap
            kegiatan pembelajaran dan pengembangan diri.
          </p>
        </div>
        <div className="item flex flex-col items-center gap-5">
          <FontAwesomeIcon icon={faUsers} size="3x" />
          <p className="text-center">
            Tenaga pengajar terdiri dari sosok-sosok muda yang berbakat,
            kompeten, handal, dan profesional.
          </p>
        </div>
      </div>
      <div className="container flex w-[90vw] flex-col lg:flex-row ">
        <img src={Banner2} alt="" className="w-full xl:w-1/2" />
        <div className="flex flex-col bg-[#D1BEBE] gap-8 p-10">
          <div>
            <h1 className="text-2xl font-roboto">Visi Sekolah</h1>
            <p className="font-roboto">
              Terwujudnya Generasi Yang Beriman, Bertaqwa, Berilmu, Terampil,
              Mandiri, Peduli Lingkungan Serta Berwawasan Kebangsaan
            </p>
          </div>
          <div>
            <h1 className="text-2xl font-roboto">Misi Sekolah</h1>
            <p className="font-roboto">
              Meningkatkan keimanan peserta didik melalui kegiatan pembelajaran
              agama dan peringatan hari – hari besar keagamaan
            </p>
          </div>
        </div>
      </div>
      <div className="py-7 container">
        <h1 className="text-center bg-slate-800 text-3xl font-roboto text-white">
          Artikel
        </h1>
        <div className="py-3 container gap-x-10 flex flex-wrap justify-between ">
          {getArticleData?.miniProject_artikel.map(
            ({ artikel_title, artikel_content, id, updated_at }) => (
              <div className="cursor-pointer " key={id}>
                <div className=" hover:bg-slate-200 p-3 rounded-md max-w-xs ">
                  <h1 className="text-2xl font-roboto pb-5">{artikel_title}</h1>
                  <p className="font-roboto text-justify line-clamp-5">
                    {artikel_content}
                  </p>
                  <p className="italic text-end py-2">
                    <Moment format="Do MMMM YYYY">{updated_at}</Moment>
                    <br />
                    <Moment format="hh:mm:ss">{updated_at}</Moment>
                  </p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
};
