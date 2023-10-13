import { useState } from "react";
import downarrow from "../../assets/orangedrop.png";
import t1 from "../../assets/1.png";
import "./Tabs.css";
import MobileTab2 from "./MobileTab2";
import MobileTab3 from "./MobileTab3";
const MobileTabs = () => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
    setOpen2(false);
    setOpen3(false);
  };
  return (
    <div>
      <div className="close_tab_design">
        <div className="tab_mobile_header" onClick={handleOpen}>
          <div className="d-flex justify-content-center align-items-start mobile_flex">
            <img src={t1} alt="" />
            <div>
              <small className="inform_auto_save"> Informe autosafe</small>{" "}
              <br />
              <span>Consulta Información por Patente en minutos</span>
            </div>
            <img
              className={open ? "rotate_image" : ""}
              src={downarrow}
              alt=""
            />
          </div>
        </div>
        <div className={open ? "open_tab mt-3" : "close_tab"}>
          <div>
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
              <button className="login_btn">Comprar informe</button>
              <p className="tab2_login_last_text_mobile">Ver informe ejemplo</p>
            </form>
          </div>
        </div>
      </div>
      <MobileTab2
        setOpen={setOpen}
        setOpen2={setOpen2}
        setOpen3={setOpen3}
        open2={open2}
      />
      <MobileTab3
        setOpen={setOpen}
        setOpen2={setOpen2}
        setOpen3={setOpen3}
        open3={open3}
      />
    </div>
  );
};

export default MobileTabs;
