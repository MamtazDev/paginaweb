import { useState } from "react";
import downarrow from "../../assets/arrow-drop-down-line.png";
import "./Tabs.css";
import MobileTab2 from "./MobileTab2";
import MobileTab3 from "./MobileTab3";
const MobileTabs = () => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
    setOpen2(false)
    setOpen3(false)
  };
  return (
    <div>
      <div className="close_tab_design">
        <div className="tab_mobile_header" onClick={handleOpen}>
          <small>Informe autosafe</small>
          <img src={downarrow} alt="" />
        </div>

        {open && (
          <div className="open_tab">
            <div className="t2_desc">
              <p>
                Entérate de todos los antecedentes antes de comprar un vehículo
                usado. Obtén tu informe al instante.
              </p>
            </div>
            <div className="">
              <form className="login_container_mobile">
                <h3>Pide tu informe</h3>
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
                <p className="tab2_login_last_text_mobile">
                  Ver informe ejemplo
                </p>
              </form>
            </div>
          </div>
        )}
      </div>
      <MobileTab2 setOpen={setOpen} setOpen2={setOpen2} setOpen3={setOpen3} open2={open2} />
      <MobileTab3 setOpen={setOpen} setOpen2={setOpen2} setOpen3={setOpen3} open3={open3} />
    </div>
  );
};

export default MobileTabs;
