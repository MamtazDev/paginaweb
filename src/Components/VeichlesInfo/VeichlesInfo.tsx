import { Row } from "react-bootstrap";
import "./VeichlesInfo.css";
import { Col } from "react-bootstrap";
import t1 from "../../assets/1.png";
import t2 from "../../assets/t21.png";
import t3 from "../../assets/t31.png";
const VeichlesInfo = () => {
  return (
    <div className="container_width ">
      <Row className="veichleInfo_margin veichle_bg">
        <Col md={4} sm={12}>
          <div className="vinfo_div">
            <img src={t1} alt="" />
            <div>
              <h5>200.000</h5>
              <small>Informes vehiculares emitidos</small>
            </div>
          </div>
        </Col>
        <Col md={4} sm={12}>
          <div className="vinfo_div">
            <img src={t2} alt="" />
            <div>
              <h5>30.000</h5>
              <small>Transferencias de dominio realizadas</small>
            </div>
          </div>
        </Col>
        <Col md={4} sm={12}>
          <div className="vinfo_div">
            <img src={t3} alt="" />
            <div>
              <h5>1.300</h5>
              <small>Autos vendidos</small>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default VeichlesInfo;
