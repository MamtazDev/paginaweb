import logo from "../../assets/Logo.png";
import "./Footer.css";
import solar_lock from "../../assets/solar_lock-linear.png";
import f1 from "../../assets/f1.png";
import f2 from "../../assets/f2.png";
import f3 from "../../assets/f3.png";
import f4 from "../../assets/f4.png";
const Footer = () => {
  return (
    <div
      className="footer_top_padding"
      style={{ paddingTop: "", background: "#f5fcfe" }}
    >
      <footer className="footer_bg">
        <div className="container_width ">
          <div className="row footer_padding_sm">
            <div className="col-md-12 COL_PADDING">
              <div className="row" style={{ marginRight: "0px" }}>
                <div className="col-md-3 mb-md-0 mb-4">
                  <h2 className="footer-heading">
                    <img src={logo} alt="" />
                  </h2>
                </div>
                <div className="col-md-3  mb-md-0 mb-4">
                  <h2 className="footer-heading">Autosafe</h2>
                  <ul className="list-unstyled footer_links">
                    <li>
                      <a href="#" className="py-1 d-block">
                        Sobre nosotros
                      </a>
                    </li>
                    <li>
                      <a href="#" className="py-1 d-block">
                        Acceso a empresas
                      </a>
                    </li>
                    <li>
                      <a href="#" className="py-1 d-block">
                        Contáctanos
                      </a>
                    </li>
                    <li>
                      <a href="#" className="py-1 d-block">
                        T-Términos y condiciones
                      </a>
                    </li>
                    <li>
                      <a href="#" className="py-1 d-block">
                        Trabaja con nosotros
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-3  mb-md-0 mb-4">
                  <h2 className="footer-heading">Servicios</h2>
                  <ul className="list-unstyled footer_links">
                    <li>
                      <a href="#" className="py-1 d-block">
                        Informe historial
                      </a>
                    </li>
                    <li>
                      <a href="#" className="py-1 d-block">
                        Transferencia de dominio
                      </a>
                    </li>
                    <li>
                      <a href="#" className="py-1 d-block">
                        Compramos tu auto
                      </a>
                    </li>
                    <li>
                      <a href="#" className="py-1 d-block">
                        Gestión de usados para empresas
                      </a>
                    </li>
                    <li>
                      <a href="#" className="py-1 d-block">
                        Sweatshirts
                      </a>
                    </li>
                    <li>
                      <a href="#" className="py-1 d-block">
                        Inspección pre compra
                      </a>
                    </li>
                    <li>
                      <a href="#" className="py-1 d-block">
                        TAG a domicilio
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-3  mb-md-0 mb-4">
                  <h2 className="footer-heading">Más contenido</h2>
                  <ul className="list-unstyled footer_links">
                    <li>
                      <a href="#" className="py-1 d-block">
                        Multas
                      </a>
                    </li>
                    <li>
                      <a href="#" className="py-1 d-block">
                        Encargo por robo
                      </a>
                    </li>
                    <li>
                      <a href="#" className="py-1 d-block">
                        Revisiones técnicas
                      </a>
                    </li>
                    <li>
                      <a href="#" className="py-1 d-block">
                        Historial de kilometraje
                      </a>
                    </li>
                    <li>
                      <a href="#" className="py-1 d-block">
                        Búsqueda de patentes
                      </a>
                    </li>
                    <li>
                      <a href="#" className="py-1 d-block">
                        Historial de propietarios
                      </a>
                    </li>
                    <li>
                      <a href="#" className="py-1 d-block">
                        Certificado de anotaciones vigentes{" "}
                      </a>
                    </li>
                    <li>
                      <a href="#" className="py-1 d-block">
                        Permiso de circulación{" "}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="hr_design" />
          <div className="small_footer">
            <p className="copyright">
              All rights reserved AUTOSAFE. Powered by Autored
            </p>
            <div className="last_footer">
              <div>
                <span>Pago seguro</span>
                <img src={solar_lock} alt="" />
              </div>
              <p className="line">|</p>
              <p>En este sitio puedes pagar con:</p>
              <div>
                <img src={f1} alt="" />
                <img src={f2} alt="" />
                <img src={f3} alt="" />
                <img src={f4} alt="" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
