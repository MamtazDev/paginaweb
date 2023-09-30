import "./Gallary.css";
import g1 from "../../assets/g1.jpg";
import g2 from "../../assets/g2.jpg";
import g3 from "../../assets/g3.jpg";
import g4 from "../../assets/g4.jpg";
import g5 from "../../assets/g5.jpg";
import g6 from "../../assets/g6.jpg";
import g7 from "../../assets/g7.jpg";
import g8 from "../../assets/g8.jpg";
import { GallaryMobile } from "./GallaryMobile";
const Gallary = () => {
  return (
    <div className="container_width gallary_container">
      <div>
        <div className="common_subheader">
          <small>Siguenos en redes sociales</small>
          <p>Sigamos conectados en Instagram</p>
        </div>
        <div className="gallary_desktop">
          <div className="g_row1" style={{ marginBottom: "16px" }}>
            <div>
              <img src={g1} alt="" className="gallary_image" />
            </div>
            <div>
              <img src={g2} alt="" className="gallary_image" />
            </div>
            <div>
              <img src={g3} alt="" className="gallary_image" />
            </div>
            <div>
              <img src={g4} alt="" className="gallary_image" />
            </div>
          </div>
          <div className="g_row1" style={{ marginBottom: "80px" }}>
            <div>
              <img src={g5} alt="" className="gallary_image" />
            </div>
            <div>
              <img src={g6} alt="" className="gallary_image" />
            </div>
            <div>
              <img src={g7} alt="" className="gallary_image" />
            </div>
            <div>
              <img src={g8} alt="" className="gallary_image" />
            </div>
          </div>
        </div>
        <div className="gallary_mobile d-none">
          <GallaryMobile />
        </div>
      </div>
      
    </div>
  );
};

export default Gallary;
