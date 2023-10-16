import { Row } from "react-bootstrap";
import "./VeichlesInfo.css";
import { Col } from "react-bootstrap";
import t1 from "../../assets/1.png";
import t2 from "../../assets/t21.png";
import t3 from "../../assets/t31.png";
import blur from "../../assets/orangeBlur.png";

const VeichlesInfo = () => {
  return (
    <div className="container_width">
      <div className=" veichle_section">
        <div className="">
          <Row className="veichleInfo_margin">
            <Col md={4} sm={12}>
              <div className="vinfo_div">
                <img src={t1} alt="" />
                <div>
                  <h3 className="v_info_title">200.000</h3>
                  <small>Informes vehiculares emitidos</small>
                </div>
              </div>
            </Col>
            <Col md={4} sm={12}>
              <div className="vinfo_div">
                <img src={t2} alt="" />
                <div>
                  <h3 className="v_info_title">30.000</h3>
                
                  <small>Transferencias de dominio realizadas</small>
                </div>
              </div>
            </Col>
            <Col md={4} sm={12}>
              <div className="vinfo_div">
                <img src={t3} alt="" />
                <div>
                  <h3 className="v_info_title">1.300</h3>
                  <small>Autos vendidos</small>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div className="mobile_veichle_blur">
        <img className="img-fluid" src={blur} alt=" " />
      </div>
    </div>
  );
};

export default VeichlesInfo;
