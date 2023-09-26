import Banner from "../Banner/Banner";
import Gallary from "../Gallary/Gallary";
import Questions from "../Questions/Questions";
import Service2 from "../Services/Service2";
import Services from "../Services/Services";
import TabsSection from "../Tabs/TabsSection";
import VeichlesInfo from "../VeichlesInfo/VeichlesInfo";

const Home = () => {
  return (
    <div>
      <Banner />
      <TabsSection />
      <VeichlesInfo />
      {/* <Services /> */}
      <Service2 />
      <Gallary />
      <Questions />
    </div>
  );
};

export default Home;
