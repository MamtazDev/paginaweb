import downarrow from "../../assets/orangedrop.png";
import "./Tabs.css";
import rightArrow from "../../assets/Icon.png";
import t1 from "../../assets/3.png";

const MobileTab2 = ({ setOpen, setOpen2, setOpen3, open2 }: any) => {
  const handleOpen = () => {
    setOpen2(!open2);
    setOpen(false);
    setOpen3(false);
  };

  console.log(open2, "j");
  return (
    <div>
      <div className="close_tab_design newDesign">
        <div className="tab_mobile_header" onClick={handleOpen}>
          <div className="d-flex justify-content-center align-items-start mobile_flex">
            <img src={t1} alt="" />
            <div>
              <small className="inform_auto_save">
                Transferir un vehículo usado online
              </small>
              <br />
              <span>Rápido, fácil y seguro</span>
            </div>
            <img
              className={open2 ? "rotate_image" : ""}
              src={downarrow}
              alt=""
            />
          </div>
        </div>

        <div className={open2 ? "open_tab mt-3" : "close_tab"}>
          <form className="login_container_mobile ">
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
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">
                Ingresa tu número de teléfono
              </label>
              <input
                required
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="+569 1234 5678"
              />
            </div>
            <button className="login_btn">Iniciar transferencia</button>
            <small className="d-flex justify-content-center align-items-center tab2_login_last_text_mobile ">
              Seguimiento de transferencia <img src={rightArrow} alt="" />
            </small>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MobileTab2;
