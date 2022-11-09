import Cookies from "js-cookie";

const loginStatus = {
  setLogin: (data) => {
    Cookies.set("email", data);
  },

  setAuth: () => {
    if (Cookies.get("email")) {
      return true;
    } else {
      return false;
    }
  },

  setLogout: (navigate) => {
    Cookies.remove("email");
    navigate("/");
  },
};

export default loginStatus;
