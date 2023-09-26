import "./Services.css";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import search from "../../assets/search.png";
import car from "../../assets/car.png";
import car_gif from "../../assets/sercices_car.gif";
const Services = () => {
  return (
    <div className="container_width services_container">
      <p>Servicios complementarios</p>
      <h2 className="common_header">Mejora tu experiencia: Servicios adicionales</h2>
      {/* cards */}
      <Row>
        <Col md={5} sm={12}>
          <div className="service_card">
            <img src={search} alt="" style={{marginTop:"6px"}}/>
            <div className="card_desc">
                <span>Inspección pre-compra</span>
                <p>Asegurate de comprar un auto en buen estado, permitiendo que expertos revisen tu futuro vehículo para evitar sorpresas</p>
            </div>
          </div>
        </Col>
        <Col md={5} sm={12}>
          <div className="service_card">
            <img src={car} alt="" style={{marginTop:"6px"}}/>
            <div className="card_desc">
                <span>TAG a domicilio</span>
                <p>Obtén o devuelve tu TAG de forma rápida y en 2 simples pasos</p>
            </div>
          </div>
        </Col>
        
      </Row>
      <div className="car_gif">
<img src={car_gif} alt="" />
      </div>
    </div>
  );
};

export default Services;
