import "./Questions.css";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
const Questions = () => {
  return (
    <div className="container_width ">
      <div className="question_section">
        <h2 className="common_header3">¿Qué estás esperando?</h2>
        <Row className="question_rows">
          <Col md={4} sm={12}>
            <div className="tab_design1 per_question">Pedir informe</div>
          </Col>
          <Col md={4} sm={12}>
            <div className="tab_design1 per_question">Transferir un vehículo</div>
          </Col>
          <Col md={4} sm={12}>
            <div className="tab_design1 per_question">Vender mi auto</div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Questions;
