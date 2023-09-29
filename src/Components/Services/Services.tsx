import "./Services.css";
import search from "../../assets/search.png";
import car from "../../assets/car.png";
import car_gif from "../../assets/sercices_car.gif";
import rafiki from "../../assets/rafiki.png";
import blur from '../../assets/Blur3.png'
const Services = () => {
  return (
    <div className="container_width services_container">
      <div className="services_header_mobile">
        <p>Servicios complementarios</p>
        <h2 className="common_header">
          Mejora tu experiencia: Servicios adicionales
        </h2>
      </div>
      <div className="small_colum_mnobile">
        <div className="card_row">
          <div className="service_column">
            <div className="service_card">
              <div>
                <img src={search} alt="" style={{ marginTop: "6px" }} />
              </div>
              <div className="card_desc">
                <span>Inspección pre-compra</span>
                <p>
                  Asegurate de comprar un auto en buen estado, permitiendo que
                  expertos revisen tu futuro vehículo para evitar sorpresas
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="service_card">
              <div>
                <img src={car} alt="" style={{ marginTop: "6px" }} />
              </div>
              <div className="card_desc">
                <span>TAG a domicilio</span>
                <p>
                  Obtén o devuelve tu TAG de forma rápida y en 2 simples pasos
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="d-none mobile_car_gif">
          <img src={rafiki} alt="" />
        </div>
      </div>
      <div className="car_gif">
        <img src={car_gif} alt="" />
      </div>
      <div className="round_blur">
        <img src={blur} alt="" />
      </div>
    </div>
  );
};

export default Services;
