import "./Header.css";
const Header1 = () => {
  return (
    <div className="nav_bg_dark">
      <div className="navbar navbar-expand-lg navbar-dark container_width sticky-top">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto d-flex justify-content-center align-items-center first_nav">
            <li className="nav-item">
              <a className="nav-link mt-1" href="#" >
                Empresa
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link dot" href="#">
                .
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link mt-1" href="#">
                Quienes somos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link dot" href="#">
                .
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link mt-1" href="#">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link dot" href="#">
                .
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link mt-1" href="#">
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
