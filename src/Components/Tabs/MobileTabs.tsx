import { useState } from "react";
import downarrow from "../../assets/arrow-drop-down-line.png";
import "./Tabs.css";
import MobileTab2 from "./MobileTab2";
import MobileTab3 from "./MobileTab3";
const MobileTabs = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    console.log("first");
    setOpen(!open);
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
              <div className="login_container_mobile">
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
                  />
                </div>
                <button className="login_btn">Comprar informe</button>
                <p style={{ textAlign: "center" }}> Ver informe ejemplo</p>
              </div>
            </div>
          </div>
        )}
      </div>
      <MobileTab2 />
      <MobileTab3 />
    </div>
  );
};

export default MobileTabs;
