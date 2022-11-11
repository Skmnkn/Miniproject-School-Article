import { Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
import tutWuri from "../Assets/img/TutWuriHandayani.png";

export const ArticleHeader = () => {
  return (
    <>
      <Navbar
        style={{ backgroundColor: "#D1BEBE" }}
        className="sticky top-0 z-10 shadow-lg"
      >
        <Navbar.Brand>
          <img src={tutWuri} className="mr-3 h-6 sm:h-9" alt="Logo Sekolah" />
          <Link to="/">
            <span className="self-center text-xl font-semibold">
              SD NEGERI LOKASARI
            </span>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="/" className="hover:bg-red-600">
            Home
          </Navbar.Link>
          <Navbar.Link href="/article">Artikel</Navbar.Link>
          <Navbar.Link href="/gallery">Galeri</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
