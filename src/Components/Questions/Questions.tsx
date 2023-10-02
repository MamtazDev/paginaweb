import "./Questions.css";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import blur from "../../assets/Blur3.png";
import blur1 from "../../assets/qm_blur.png";
const Questions = () => {
  return (
    <div style={{ position: "relative" }}>
      <div className="container_width ">
        <div className="question_parent">
          <div className="question_section">
            <h2 className="common_header3">¿Qué estás esperando?</h2>
            <Row className="question_rows">
              <Col md={4} sm={12}>
                <div className="tab_design1 per_question">Pedir informe</div>
              </Col>
              <Col md={4} sm={12}>
                <div className="tab_design1 per_question">
                  Transferir un vehículo
                </div>
              </Col>
              <Col md={4} sm={12}>
                <div className="tab_design1 per_question">Vender mi auto</div>
              </Col>
            </Row>
            <div className="question_blur">
              <img className="img-fluid" src={blur} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="question_blur_mobile">
        <img className="img-fluid" src={blur1} alt="" />
      </div>
    </div>
  );
};

export default Questions;
