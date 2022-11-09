import { Navbar } from "flowbite-react";
import { Outlet, useNavigate } from "react-router-dom";
import tutWuri from "../../Assets/img/TutWuriHandayani.png";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import loginStatus from "../../Utils/auth";

export const AdminHeader = () => {
  const MySwal = withReactContent(Swal);

  const navigate = useNavigate();

  const handleLogout = () => {
    MySwal.fire({
      title: "Are you sure to Logout?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: "success",
          title: "Logout Success",
        });
        loginStatus.setLogout(navigate);
      }
    });
  };

  return (
    <>
      <Navbar
        style={{ backgroundColor: "#D1BEBE" }}
        className="sticky top-0 z-10 shadow-lg"
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
          <Navbar.Link href="/secret-admin/mainArticlePage">
            Artikel
          </Navbar.Link>
          <Navbar.Link href="/secret-admin/addGallery">Add Galeri</Navbar.Link>
          <Navbar.Link onClick={handleLogout} className="cursor-pointer">
            Logout
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
      <Outlet />
    </>
  );
};
