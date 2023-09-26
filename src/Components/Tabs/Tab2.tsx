import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import t1 from "../../assets/t21.png";
import t2 from "../../assets/t22.png";
import t3 from "../../assets/t23.png";
import t4 from "../../assets/t24.png";
import t5 from "../../assets/t25.png";
import t6 from "../../assets/t26.png";
import t7 from "../../assets/t27.png";
import rightArrow from "../../assets/Icon.png";
import "./Tabs.css";
const Tab2 = () => {
  return (
    <div>
      <Row className="section2_container">
        <Col sm={6} md={6} className="left_login">
          <div className="t1_header">
            <img src={t1} alt="" />
            <span className="inform_auto_save"> Transferencia de dominio</span>
          </div>
          <div className="t1_desc">
            <p>Sin trámites presenciales.</p>
            <p>
              Transfiere el dominio de tu vehículo de forma rápida y segura,
              dondequiera que estés, con la misma validez que en notaria.¡Inicia
              tu transferencia ahora!
            </p>
          </div>
          <div>
            <Row className="left_images_colum">
              <Col sm={12} md={6}>
                <div className="common_div_flex">
                  <img src={t2} alt="" />
                  <small>Trámite 100% digital</small>
                </div>
                <div className="common_div_flex">
                  <img src={t3} alt="" />
                  <small>Rápido y seguro</small>
                </div>
                <div className="common_div_flex">
                  <img src={t4} alt="" />
                  <small>Autorizado por Notario</small>
                </div>
              </Col>
              <Col sm={12} md={6}>
                <div className="common_div_flex">
                  <img src={t5} alt="" />
                  <small>Soporte por WhatsApp</small>
                </div>
                <div className="common_div_flex">
                  <img src={t6} alt="" />
                  <small>Fácil seguimiento </small>
                </div>
                <div className="common_div_flex">
                  <img src={t7} alt="" />
                  <small>TAG a domicilio</small>
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
          <div className="login_container">
            <h3>Solicita tu transferencia</h3>
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
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">
                Ingresa tu número de teléfono
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="+569 1234 5678"
              />
            </div>
            <button className="login_btn">Iniciar transferencia</button>
            <small className="d-flex justify-content-center align-items-center tab2_login_last_text ">
              Seguimiento de transferencia <img src={rightArrow} alt="" />
            </small>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Tab2;
