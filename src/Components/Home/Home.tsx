import Banner from "../Banner/Banner";
import CardCarousal from "../CardCarousal/CardCarousal";
import Gallary from "../Gallary/Gallary";
import Questions from "../Questions/Questions";
import Service2 from "../Services/Service2";
import Services from "../Services/Services";
import MobileTabs from "../Tabs/MobileTabs";
import TabsSection from "../Tabs/TabsSection";
import VeichlesInfo from "../VeichlesInfo/VeichlesInfo";
import "../../App.css";
import blurleft from "../../assets/Blur.png";

const Home = () => {
  return (
    <div>
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
      <CardCarousal />
      <Gallary />
      <Questions />
    </div>
  );
};

export default Home;
