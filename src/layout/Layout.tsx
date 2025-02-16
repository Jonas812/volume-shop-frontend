import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const Layout = () => {
  const location = useLocation();
  const hideNavbarPaths = ["/login"];

  return (
    <>
      {!hideNavbarPaths.includes(location.pathname) && <Navbar />}
      <div id="content">
        <Outlet />
      </div>
      <Footer></Footer>
    </>
  );
};

export default Layout;