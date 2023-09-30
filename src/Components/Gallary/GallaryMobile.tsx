import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import g1 from "../../assets/g1.jpg";
import g2 from "../../assets/g2.jpg";
import g3 from "../../assets/g3.jpg";
import g4 from "../../assets/g4.jpg";
import g5 from "../../assets/g5.jpg";
import g6 from "../../assets/g6.jpg";
import g7 from "../../assets/g7.jpg";
import "./Gallary.css";
export const GallaryMobile = () => {
  return (
    <>
      <div className="">
        <OwlCarousel className="owl-theme" loop dots={false} autoplay >
          <div className="item mobile_gallary_img">
            <img src={g1} alt="" />
          </div>
          <div className="item mobile_gallary_img">
            <img src={g2} alt="" />
          </div>
          <div className="item mobile_gallary_img">
            <img src={g3} alt="" />
          </div>
          <div className="item mobile_gallary_img">
            <img src={g4} alt="" />
          </div>
          <div className="item mobile_gallary_img">
            <img src={g5} alt="" />
          </div>
          <div className="item mobile_gallary_img">
            <img src={g6} alt="" />
          </div>
          <div className="item mobile_gallary_img">
            <img src={g7} alt="" />
          </div>
        </OwlCarousel>
      </div>
    </>
  );
};
