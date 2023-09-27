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
const Home = () => {
  return (
    <div
      style={
        {
          // backgroundColor: "#F5FCFF",
          // zIndex: "-999999999999999999",
          // position: "relative",
        }
      }
    >
      <Banner />
      <div className="desktop_tabs">
        <TabsSection />
      </div>
      <div className="mobile_tabs">
        <MobileTabs />
      </div>
      <VeichlesInfo />
      <Services />
      <Service2 />
      {/* <Gallary /> */}
      {/* <Questions /> */}
      <CardCarousal />
    </div>
  );
};

export default Home;
