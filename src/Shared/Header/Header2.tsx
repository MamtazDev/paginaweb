import logo from "../../assets/Logo.png";
import bottomArrow from "../../assets/bottomarrow.png";
const Header2 = () => {
  return (
    <div className="">
      <nav>
        <div className="wrapper">
          <div className="logo">
            <a href="#">
              <img src={logo} alt="" />
            </a>
          </div>
          <input type="radio" name="slider" id="menu-btn" />
          <input type="radio" name="slider" id="close-btn" />
          <ul className="nav-links">
            <label htmlFor="close-btn" className="btn close-btn">
              <i className="fas fa-times"></i>
            </label>

            <li>
              <a href="#" className="desktop-item">
                Informes autosafe
                <img
                  src={bottomArrow}
                  style={{ height: "16px", width: "16px" }}
                  alt=""
                />
              </a>
              <input type="checkbox" id="showMega" />
              <label htmlFor="showMega" className="mobile-item">
                Informes autosafe
              </label>
              <div className="mega-box">
                <div className="content">
                  <div className="row row_1 bg_red">
                    <header>Informe Autosafe</header>
                    <small className="megamenu_desc">
                      Lorem ipsum dolor sit amet consectetur. Suspendisse nisl
                      ornare nisl est pulvinar pulvinar morbi.
                    </small>
                  </div>
                  <div className="row row_1 " style={{paddingLeft:"80px"}}>
                    <header>Informe Historial</header>
                    <small className="megamenu_desc">
                      Entérate de todo el historial de un vehículo usado al
                      instante
                    </small>
                  </div>
                  <div className="row row_1 " style={{paddingLeft:"80px"}}>
                    <header>Informe de precio</header>
                    <small className="megamenu_desc">
                      Conoce el real valor de mercado de tu auto
                    </small>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <a href="#" className="desktop-item">
                Transferencia de dominio
                <img
                  src={bottomArrow}
                  style={{ height: "16px", width: "16px" }}
                  alt=""
                />
              </a>
              <input type="checkbox" id="showMega" />
              <label htmlFor="showMega" className="mobile-item">
                Transferencia de dominio
              </label>
              <div className="mega-box">
                <div className="content">
                  <div className="row row_1 bg_red">
                    <header>Informe Autosafe</header>
                    <small className="megamenu_desc">
                      Lorem ipsum dolor sit amet consectetur. Suspendisse nisl
                      ornare nisl est pulvinar pulvinar morbi.
                    </small>
                  </div>
                  <div className="row row_1 " style={{paddingLeft:"80px"}}>
                    <header>Informe Historial</header>
                    <small className="megamenu_desc">
                      Entérate de todo el historial de un vehículo usado al
                      instante
                    </small>
                  </div>
                  <div className="row row_1 " style={{paddingLeft:"80px"}}>
                    <header>Informe de precio</header>
                    <small className="megamenu_desc">
                      Conoce el real valor de mercado de tu auto
                    </small>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <a href="#" className="desktop-item">
                Vende tu auto
                <img
                  src={bottomArrow}
                  style={{ height: "16px", width: "16px" }}
                  alt=""
                />
              </a>
              <input type="checkbox" id="showMega" />
              <label htmlFor="showMega" className="mobile-item">
                Vende tu auto
              </label>
              <div className="mega-box">
                <div className="content">
                  <div className="row row_1 bg_red">
                    <header>Informe Autosafe</header>
                    <small className="megamenu_desc">
                      Lorem ipsum dolor sit amet consectetur. Suspendisse nisl
                      ornare nisl est pulvinar pulvinar morbi.
                    </small>
                  </div>
                  <div className="row row_1 " style={{paddingLeft:"80px"}}>
                    <header>Informe Historial</header>
                    <small className="megamenu_desc">
                      Entérate de todo el historial de un vehículo usado al
                      instante
                    </small>
                  </div>
                  <div className="row row_1 " style={{paddingLeft:"80px"}}>
                    <header>Informe de precio</header>
                    <small className="megamenu_desc">
                      Conoce el real valor de mercado de tu auto
                    </small>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <a href="#" className="desktop-item">
                Servicios complementarios
                <img
                  src={bottomArrow}
                  style={{ height: "16px", width: "16px" }}
                  alt=""
                />
              </a>
              <input type="checkbox" id="showMega" />
              <label htmlFor="showMega" className="mobile-item">
                Servicios complementarios
              </label>
              <div className="mega-box">
                <div className="content">
                  <div className="row row_1 bg_red">
                    <header>Informe Autosafe</header>
                    <small className="megamenu_desc">
                      Lorem ipsum dolor sit amet consectetur. Suspendisse nisl
                      ornare nisl est pulvinar pulvinar morbi.
                    </small>
                  </div>
                  <div className="row row_1 " style={{paddingLeft:"80px"}}>
                    <header>Informe Historial</header>
                    <small className="megamenu_desc">
                      Entérate de todo el historial de un vehículo usado al
                      instante
                    </small>
                  </div>
                  <div className="row row_1 " style={{paddingLeft:"80px"}}>
                    <header>Informe de precio</header>
                    <small className="megamenu_desc">
                      Conoce el real valor de mercado de tu auto
                    </small>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <label htmlFor="menu-btn" className="btn menu-btn">
            <i className="fas fa-bars"></i>
          </label>
        </div>
      </nav>
    </div>
  );
};

export default Header2;
