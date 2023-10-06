import "./Services.css";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import car2 from "../../assets/car2.png";
import rightArrow from "../../assets/arrow-right8.png";
import { Link } from "react-router-dom";
import blur from "../../assets/Blur.png";
const Service2 = () => {
  return (
    <div className="container_width ">
      <div className="service_2_container">
        <Row className="desktop_device_card">
          <Col md={7} sm={12} className="left_container">
            <div className="service2_left">
              <h2 className="common_header1">Vende tu auto</h2>
              <small>
                Lorem ipsum dolor sit amet consectetur. Suspendisse nisl ornare
                nisl est pulvinar pulvinar morbi.
              </small>
              {/*    <div className="var_mas_info_text">
                <Link to="/"> Ver más información</Link>
                <img src={rightArrow} alt="" />
              </div> */}
              <div>
                <button className="var_mas_info_button mt-3">
                  Ver más información
                  <img src={rightArrow} alt="" />
                </button>
              </div>
            </div>
          </Col>
          <Col md={5} sm={12} className="section2_right_img">
            <img className="img-fluid" src={car2} alt="" />
          </Col>
        </Row>
      </div>
      {/* mobile device */}
      <div className="card_container_width">
        <div className="card">
          <div className="card_img">
            <img className="card-img-top" src={car2} alt="Card image cap" />
          </div>
          <div className="card-body">
            <h5 className="card-title">Vende tu auto</h5>
            <p className="card-text">
              Lorem ipsum dolor sit amet consectetur. Suspendisse nisl ornare
              nisl est pulvinar pulvinar morbi.
            </p>
              <div className="var_mas_info_text_mobile">
              <Link to="/"> Ver más información</Link>
              <img src={rightArrow} alt="" />
            </div>
       {/*      <button className="var_mas_info_button">
              Ver más información
              <img src={rightArrow} alt="" />
            </button> */}
          </div>
        </div>

        {/*  */}
        <div className="service2_card_blur">
          <img className="img-fluid" src={blur} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Service2;
