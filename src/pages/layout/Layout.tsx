import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";

const Layout = () => {
  const location = useLocation();
  const hideNavbarPaths = ["/login"];

  return (
    <>
      {!hideNavbarPaths.includes(location.pathname) && <Navbar />}
      <div id="content">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
