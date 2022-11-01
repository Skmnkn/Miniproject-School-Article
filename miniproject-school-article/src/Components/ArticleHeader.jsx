import { Navbar } from "flowbite-react";
import tutWuri from "../Assets/img/TutWuriHandayani.png";

export const ArticleHeader = () => {
  return (
    <>
      <Navbar
        style={{ backgroundColor: "#D1BEBE" }}
        className="sticky top-0 z-10"
      >
        <Navbar.Brand>
          <img src={tutWuri} className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            SD NEGERI LOKASARI
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="/" className="hover:text-white">
            Home
          </Navbar.Link>
          <Navbar.Link href="/article">Artikel</Navbar.Link>
          <Navbar.Link href="/gallery">Galeri</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
