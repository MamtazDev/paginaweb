import downarrow from "../../assets/orangedrop.png";
import "./Tabs.css";
import t1 from "../../assets/2.png";

const MobileTab3 = ({ setOpen, open3, setOpen3, setOpen2 }: any) => {
  const handleOpen = () => {
    setOpen3(!open3);
    setOpen(false);
    setOpen2(false);
  };
  return (
    <div>
      <div className="close_tab_design">
        <div className="tab_mobile_header" onClick={handleOpen}>
          <div className="d-flex justify-content-center align-items-start mobile_flex">
            <img src={t1} alt="" />
            <div>
              <small className="inform_auto_save">Informe precios</small> <br />
              <span>
                Conoce el precio y tasación real de mercado de un vehículo usado
              </span>
            </div>
            <img src={downarrow} alt="" />
          </div>
        </div>

        <div className={open3 ? "open_tab mt-3" : "close_tab"}>
          <div>
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
              <div className="select_container">
                <div className="select_design">
                  <select
                    className="form_select"
                    aria-label="Default select example"
                    required
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
                    required
                  >
                    <option selected>0km</option>
                    <option value="">1km</option>
                    <option value="">2km</option>
                  </select>
                </div>
              </div>
              <button type="button" className="login_btn">Comprar informe</button>
              <p className="tab2_login_last_text_mobile">Ver informe ejemplo</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileTab3;
