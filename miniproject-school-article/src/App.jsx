import "./App.css";
import SetupRoutes from "./Routes/SetupRoutes";
import "@fontsource/roboto";
import ScrollToTop from "react-scroll-to-top";
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      <Helmet>
        <title>SD Negeri Lokasari</title>
      </Helmet>
      <SetupRoutes />
      <ScrollToTop smooth viewBox="-45 0 256 256" />
    </>
  );
}

export default App;
