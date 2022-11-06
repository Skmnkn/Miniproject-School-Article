import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export const ArticleFooter = () => {
  return (
    <>
      <footer className="relative bg-slate-800 pt-8 pb-6 container text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-left lg:text-left justify-between">
            <div className="lg:w-6/12">
              <h4 className="text-3xl fonat-semibold  mb-3 font-semibold">
                Alamat
              </h4>
              <h5 className="text-lg mt-0 mb-2 ">
                Jln. Sukarno Hatta Kec. Kotabumi Selatan Kab. Lampung Utara
                Prov. Lampung Indonesia 34517
              </h5>
              <div className="mt-6 lg:mb-0 mb-6">
                <button
                  className="bg-slate-800 text-lightBlue-400 hover:bg-slate-500 shadow-xl font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <FontAwesomeIcon icon={faEnvelope} size="lg" />
                </button>
                <button
                  className="bg-slate-800 text-lightBlue-400 hover:bg-slate-500 shadow-xl font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <FontAwesomeIcon icon={faPhone} size="1x" />
                </button>
                <button
                  className="bg-slate-800 text-lightBlue-400 hover:bg-slate-500 shadow-xl font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <FontAwesomeIcon icon={faWhatsapp} size="lg" />
                </button>
                <button
                  className="bg-slate-800 text-lightBlue-400 hover:bg-slate-500 shadow-xl font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <FontAwesomeIcon icon={faLocationDot} size="lg" />
                </button>
              </div>
              <div className="pt-6 px-auto underline hover:text-[#D1BEBE]">
                <Link to="/loginPage">Admin Page</Link>
              </div>
            </div>
            <div className="lg:w-6/12 px-4 flex flex-wrap justify-end">
              <div className="mapouter">
                <div className="gmap_canvas rounded">
                  <iframe
                    width={500}
                    height={220}
                    id="gmap_canvas"
                    src="https://maps.google.com/maps?q=Sd%20Lokasari%20Cianjur&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    frameBorder={0}
                    scrolling="no"
                    marginHeight={0}
                    marginWidth={0}
                    title="SD Lokasari"
                  />
                  <br />
                  <style
                    dangerouslySetInnerHTML={{
                      __html:
                        ".mapouter{position:relative;text-align:right;height:220px;width:500px;}",
                    }}
                  />
                  <a href="https://www.embedgooglemap.net">
                    google maps embedded map
                  </a>
                  <style
                    dangerouslySetInnerHTML={{
                      __html:
                        ".gmap_canvas {overflow:hidden;background:none!important;height:220px;width:500px;}",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <hr className="my-5 border-white" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-blueGray-500 font-semibold py-1">
                Copyright © <span id="get-current-year">2022</span>
                <a
                  href="/"
                  className="text-white hover:text-slate-400"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  SD NEGERI LOKASARI
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
