import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import t1 from "../../assets/1.png";
import t2 from "../../assets/2.png";
import t3 from "../../assets/3.png";
import t4 from "../../assets/4.png";
import t5 from "../../assets/5.png";
import t6 from "../../assets/6.png";
import t7 from "../../assets/7.png";
import rightArrow from "../../assets/arrow-right8.png";
import blur from "../../assets/orangeBlur.png";
import "./Tabs.css";
import { Link } from "react-router-dom";
const Informeautosafe = () => {
  return (
    <div className="">
      <Row className="section2_container ">
        <Col sm={6} md={6} className="left_login">
          <div className="t1_header">
            <img src={t1} alt="" />
            <span className="inform_auto_save"> Informe autosafe</span>
          </div>
          <div className="t1_desc">
            <p>¡Evita sorpresas!</p>
            <p>
              Ten en consideración que: 2 de cada 3 vehículos tienen detalles en
              su historial.
            </p>
            <p>
              Entérate de todos los antecedentes antes de comprar un vehículo
              usado. Obtén tu informe al instante.
            </p>
          </div>
          <div>
            <Row className="left_images_colum">
              <Col sm={12} md={6}>
                <div className="common_div_flex">
                  <img src={t2} alt="" />
                  <small>Pérdida total</small>
                </div>
                <div className="common_div_flex">
                  <img src={t3} alt="" />
                  <small>Encargo por robo</small>
                </div>
                <div className="common_div_flex">
                  <img src={t4} alt="" />
                  <small>Limitaciones al dominio</small>
                </div>
              </Col>
              <Col sm={12} md={6}>
                <div className="common_div_flex">
                  <img src={t5} alt="" />
                  <small>Revisión técnica y kilometraje</small>
                </div>
                <div className="common_div_flex">
                  <img src={t6} alt="" />
                  <small>Permiso de circulación</small>
                </div>
                <div className="common_div_flex">
                  <img src={t7} alt="" />
                  <small>Multas</small>
                </div>
              </Col>
            </Row>
          </div>
          <button className="var_mas_info_button">
            Ver más información
            <img src={rightArrow} alt="" />
          </button>
        </Col>
        <Col className="login_form img_3" sm={6} md={6}>
          <form className="login_container">
            <div >
              <h3>Pide tu informe</h3>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1" className="label_login">
                  Ingresa la patente
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="XXX-XXX"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Ingresa tu correo</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="mail@mail.com"
                  required
                />
              </div>
              <button type="submit" className="login_btn">
                Comprar informe
              </button>
              <p ><Link to="/" className="tab2_login_last_text">Ver informe ejemplo</Link></p>
            </div>
          </form>
        </Col>
      </Row>
      <div className="tab_blur_right">
        <img className="img-fluid" src={blur} alt="" />
      </div>
    </div>
  );
};

export default Informeautosafe;
