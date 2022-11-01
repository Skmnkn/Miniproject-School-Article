import { Dropdown, Navbar } from "flowbite-react";
import tutWuri from "../../Assets/img/TutWuriHandayani.png";

export const AdminHeader = () => {
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
          <Navbar.Link href="/secret-admin" className="hover:text-white">
            Dashboard
          </Navbar.Link>
          <Dropdown arrowIcon={true} inline={true} label={"Artikel"}>
            <Dropdown.Item>
              <Navbar.Link href="/secret-admin/addArticle">
                Add Artikel
              </Navbar.Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Navbar.Link href="/secret-admin/editArticle">
                Edit Artikel
              </Navbar.Link>
            </Dropdown.Item>
          </Dropdown>
          <Dropdown arrowIcon={true} inline={true} label={"Galeri"}>
            <Dropdown.Item>
              <Navbar.Link href="/secret-admin/addGallery">
                Add Galeri
              </Navbar.Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Navbar.Link href="/secret-admin/editGallery">
                Edit Galeri
              </Navbar.Link>
            </Dropdown.Item>
          </Dropdown>

          <Navbar.Link href="/" className="hover:text-white">
            Go To HomePage
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
