import "./Gallary.css";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import g1 from "../../assets/g1.jpg";
import g2 from "../../assets/g2.jpg";
import g3 from "../../assets/g3.jpg";
import g4 from "../../assets/g4.jpg";
import g5 from "../../assets/g5.jpg";
import g6 from "../../assets/g6.jpg";
import g7 from "../../assets/g7.jpg";
import g8 from "../../assets/g8.jpg";
const Gallary = () => {
  return (
    <div className="container_width gallary_container">
      <div>
        <div className="common_subheader">
          <small>Siguenos en redes sociales</small>
          <p>Sigamos conectados en Instagram</p>
        </div>
        <div className="gallary_desktop">
          <Row style={{ marginBottom: "16px" }}>
            <Col md={3} sm={12}>
              <img src={g1} alt="" className="gallary_image" />
            </Col>
            <Col md={3} sm={12}>
              <img src={g2} alt="" className="gallary_image" />
            </Col>
            <Col md={3} sm={12}>
              <img src={g3} alt="" className="gallary_image" />
            </Col>
            <Col md={3} sm={12}>
              <img src={g4} alt="" className="gallary_image" />
            </Col>
          </Row>
          <Row style={{ marginBottom: "80px" }}>
            <Col md={3} sm={12}>
              <img src={g5} alt="" className="gallary_image" />
            </Col>
            <Col md={3} sm={12}>
              <img src={g6} alt="" className="gallary_image" />
            </Col>
            <Col md={3} sm={12}>
              <img src={g7} alt="" className="gallary_image" />
            </Col>
            <Col md={3} sm={12}>
              <img src={g8} alt="" className="gallary_image" />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Gallary;
