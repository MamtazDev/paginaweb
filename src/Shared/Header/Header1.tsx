import "./Header.css";
const Header1 = () => {
  return (
    <div className="nav_bg_dark">
      <div className="navbar navbar-expand-lg navbar-dark container_width sticky-top">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto d-flex justify-content-center align-items-center">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Empresa
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link dot" href="#">
                .
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Quienes somos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link dot" href="#">
                .
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="#">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link dot" href="#">
                .
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header1;
