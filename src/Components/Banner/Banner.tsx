import "./Banner.css";
import blurleft from "../../assets/Blur.png";
import blurright from "../../assets/Blur1.png";
const Banner = () => {
  return (
    <>
      <div className="banner_bg blur_left_parent">
        <div className="blur_image1">
          <img src={blurright} alt="" />
        </div>

        <div className="container_width ">
          <div className="banner_text">
            <h1>
              <span className="blue_light_color">
                Transferencias y compras{" "}
              </span>
              <span className="de_veichle">
                de Vehículos ágiles y seguras.Tu portal confiable para el mundo
                automotor.
              </span>
            </h1>
          </div>
        </div>
        {/* blur image */}
        <div className="blur_image">
          <img src={blurleft} alt="" />
        </div>
      </div>
    </>
  );
};

export default Banner;
