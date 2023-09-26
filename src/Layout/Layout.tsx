import Footer from "../Shared/Footer/Footer";
import Header1 from "../Shared/Header/Header1";
import Header2 from "../Shared/Header/Header2";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="">
      <Header1 />
      <Header2 />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
