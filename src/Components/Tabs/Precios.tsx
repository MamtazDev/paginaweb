import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import t1 from "../../assets/t31.png";
import t2 from "../../assets/t32.png";
import t3 from "../../assets/t33.png";
import t4 from "../../assets/t34.png";
import t5 from "../../assets/t35.png";
import t6 from "../../assets/t36.png";
import rightArrow from "../../assets/Icon.png";
import blur from "../../assets/orangeBlur.png";

import "./Tabs.css";
import { Link } from "react-router-dom";

const Precios = () => {
  return (
    <>
      <Row className="section2_container">
        <Col sm={6} md={6} className="left_login">
          <div className="t1_header">
            <img src={t1} alt="" />
            <span className="inform_auto_save">Informe de precios</span>
          </div>
          <div className="t1_desc">
            <p>¡Obtén un precio justo!</p>
            <p>
              Conoce el valor real de mercado un vehículo de acuerdo a su
              versión y kilometraje.
            </p>
            <p>
              Obtén toda la información necesaria para comprar o vender tu auto
              usado al precio correcto, con la información más actualizada del
              mercado.
            </p>
          </div>
          <div>
            <Row className="left_images_colum">
              <Col sm={12} md={6}>
                <div className="common_div_flex">
                  <img src={t2} alt="" />
                  <small>Valor Real de Mercado</small>
                </div>
                <div className="common_div_flex">
                  <img src={t3} alt="" />
                  <small>Valor como Parte de Pago</small>
                </div>
                <div className="common_div_flex">
                  <img src={t4} alt="" />
                  <small>Depreciación por Kilometraje</small>
                </div>
              </Col>
              <Col sm={12} md={6}>
                <div className="common_div_flex">
                  <img src={t5} alt="" />
                  <small>Popularidad según zona geográfica</small>
                </div>
                <div className="common_div_flex">
                  <img src={t6} alt="" />
                  <small>Precio de otras versiones del modelo</small>
                </div>
              </Col>
            </Row>
          </div>
          <button className="var_mas_info_button">
            Ver más información
            <img src={rightArrow} alt="" />
          </button>
        </Col>
        <Col className="login_form" sm={6} md={6}>
          <form className="login_container">
            <h3>Pide tu informe</h3>
            <form className="form-group">
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
            </form>
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
            <div className="select_container">
              <div className="select_design">
                <select
                  className="form_select"
                  aria-label="Default select example"
                >
                  <option selected>2020</option>
                  <option>2021</option>
                  <option>2022</option>
                </select>
              </div>
              <div className="select_design">
                <select
                  className="form_select"
                  aria-label="Default select example"
                >
                  <option selected>0km</option>
                  <option value="">1km</option>
                  <option value="">2km</option>
                </select>
              </div>
            </div>
            <button className="login_btn">Comprar informe</button>
            <p ><Link to="/" className="tab2_login_last_text">Ver informe ejemplo</Link></p>
          </form>
        </Col>
      </Row>
      <div className="tab_blur_right">
        <img className="img-fluid" src={blur} alt="" />
      </div>
    </>
  );
};

export default Precios;
