import Footer from "../Shared/Footer/Footer";
import Header1 from "../Shared/Header/Header1";
import Header2 from "../Shared/Header/Header2";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="">
      <div className="nav_fixed">
        <Header1 />
        <Header2 />
      </div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
