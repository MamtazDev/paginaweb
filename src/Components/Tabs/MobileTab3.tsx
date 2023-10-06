import downarrow from "../../assets/arrow-drop-down-line.png";
import "./Tabs.css";
const MobileTab3 = ({ setOpen, open3, setOpen3, setOpen2 }) => {
  const handleOpen = () => {
    setOpen3(!open3);
    setOpen(false);
    setOpen2(false);
  };
  return (
    <div>
      <div className="close_tab_design">
        <div className="tab_mobile_header" onClick={handleOpen}>
          <small>Informe de precios</small>
          <img src={downarrow} alt="" />
        </div>

        {open3 && (
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
                <p className="tab2_login_last_text_mobile">
                  Ver informe ejemplo
                </p>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileTab3;
