import downarrow from "../../assets/arrow-drop-down-line.png";
import "./Tabs.css";
import rightArrow from "../../assets/Icon.png";

const MobileTab2 = ({setOpen ,setOpen2,setOpen3,open2}) => {
  const handleOpen = () => {
    setOpen2(!open2);
    setOpen(false);
    setOpen3(false)
  };
  return (
    <div>
      <div className="close_tab_design">
        <div className="tab_mobile_header" onClick={handleOpen}>
          <small>Transferencia de dominio</small>
          <img src={downarrow} alt="" />
        </div>

        {open2 && (
          <div className="open_tab">
            <div className="t2_desc">
              <p>
                Transfiere el dominio de tu vehículo de forma rápida y segura,
                dondequiera que estés, con la misma validez que en
                notaria.¡Inicia tu transferencia ahora!
              </p>
            </div>
            <div className="">
              <form className="login_container_mobile">
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
        )}
      </div>
    </div>
  );
};

export default MobileTab2;
