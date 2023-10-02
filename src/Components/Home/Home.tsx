import Banner from "../Banner/Banner";
import Gallary from "../Gallary/Gallary";
import Questions from "../Questions/Questions";
import Service2 from "../Services/Service2";
import Services from "../Services/Services";
import MobileTabs from "../Tabs/MobileTabs";
import TabsSection from "../Tabs/TabsSection";
import "../../App.css";
import blurleft from "../../assets/Blur.png";
import blur from "../../assets/orangeBlur.png";
import Carousal from "../CardCarousal/Carousal";
import VeichlesInfo from "../VeichlesInfo/VeichlesInfo";

const Home = () => {
  return (
    <div style={{ backgroundColor: "#f5fcfe", zIndex: "" }}>
      <Banner />
      <div className="desktop_tabs">
        <TabsSection />
      </div>
      <div className="img3">
        <img src={blurleft} alt="" />
      </div>
      <div className="mobile_tabs">
        <MobileTabs />
      </div>
      <VeichlesInfo />
      <Services />
      <Service2 />
      <div style={{ position: "relative" }}>
        {/* <CardCarousal /> */}
        <Carousal />
        <Gallary />
        <div className="carousal_blur">
          <img className="img-fluid" src={blur} alt="" />
        </div>
      </div>
      <Questions />
    </div>
  );
};

export default Home;
