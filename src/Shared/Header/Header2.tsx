import logo from "../../assets/Logo.png";
import bottomArrow from "../../assets/bottomarrow.png";
import { useEffect, useState } from "react";

const Header2 = () => {
  const [colorChange, setColorchange] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };

  const [showDropDownPhn, setShowDropDownPhn] = useState(null)
    useEffect(() => {}, [showDropDownPhn])


  window.addEventListener("scroll", changeNavbarColor);
  return (
    <div className="">
      <nav className={colorChange ? "navbar_colorChange" : "main_navbar"}>
        <div className="wrapper">
          <div className="logo">
            <a href="#">
              <img src={logo} alt="" />
            </a>
          </div>
          <input type="radio" name="slider" id="menu-btn" />
          <input type="radio" name="slider" id="close-btn" />
          <ul className="nav-links">
            <label
              htmlFor="close-btn"
              className="btn close-btn mobile_design_navbar"
            >
              <img src={logo} alt="" />
              <i className="fas fa-times"></i>
            </label>
            <hr className="hr_nav" />
            <li>
              <input type="checkbox" id="" />
                <div className="mobile_top_links">
                  <a href="/" className="">
                    Empresa
                  </a>
                  <a href="/" className="">
                    Quienes somos
                  </a>
                  <a href="/" className="">
                    Blog  
                  </a>
                  <a href="/" className="">
                    Contacto
                  </a>
                </div>
              <hr />
               <div className="mega-box">
                <div className="content">
                  <div className="row row_1 bg_red">
                    <header>Informe Autosafe</header>
                    <small className="megamenu_desc">
                      Lorem ipsum dolor sit amet consectetur. Suspendisse nisl
                      ornare nisl est pulvinar pulvinar morbi.
                    </small>
                  </div>
                  <div className="row row_1 ">
                    <header>Informe Historial</header>
                    <small className="megamenu_desc">
                      Entérate de todo el historial de un vehículo usado al
                      instante
                    </small>
                  </div>
                  <div className="row row_1 ">
                    <header>Informe de precio</header>
                    <small className="megamenu_desc">
                      Conoce el real valor de mercado de tu auto
                    </small>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <a href="#" className="desktop-item">
                Informes autosafe
                <img
                  src={bottomArrow}
                  style={{ height: "16px", width: "16px" }}
                  alt=""
                />
              </a>

              {/* ref */}
              <input  checked={showDropDownPhn === 0 ? true : false} type="checkbox" id="showMega" />
              <label onClick={() => showDropDownPhn !== 0  ?  setShowDropDownPhn(0) :  setShowDropDownPhn(null)}  className="mobile-item">
                <small > Informes autosafe</small>
                <img
                  src={bottomArrow}
                  style={{ height: "24px", width: "24px" }}
                  alt=""
                />
              </label>
         

              {/* desktop */}
              <div className="mega-box">
                <div className="content">
                  <div className="row row_1 bg_red">
                    <header>Informe Autosafe</header>
                    <small className="megamenu_desc">
                      Lorem ipsum dolor sit amet consectetur. Suspendisse nisl
                      ornare nisl est pulvinar pulvinar morbi.
                    </small>
                  </div>
                  <div className="row row_1 " >
                    <header>Informe Historial</header>
                    <small className="megamenu_desc">
                      Entérate de todo el historial de un vehículo usado al
                      instante
                    </small>
                  </div>
                  <div className="row row_1 ">
                    <header>Informe de precio</header>
                    <small className="megamenu_desc">
                      Conoce el real valor de mercado de tu auto
                    </small>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <a href="#" className="desktop-item">
                Transferencia de dominio
                <img
                  src={bottomArrow}
                  style={{ height: "16px", width: "16px" }}
                  alt=""
                />
              </a>
              <input  checked={showDropDownPhn === 1 ? true : false}  type="checkbox" id="showMega1" />
              <label  onClick={() => showDropDownPhn !== 1  ?  setShowDropDownPhn(1) :  setShowDropDownPhn(null)}  htmlFor="showMega1" className="mobile-item">
                <small> Transferencia de dominio</small>
                <img
                  src={bottomArrow}
                  style={{ height: "24px", width: "24px" }}
                  alt=""
                />
              </label>
              <div className="mega-box">
                <div className="content">
                  <div className="row row_1 bg_red">
                    <header>Informe Autosafe</header>
                    <small className="megamenu_desc">
                      Lorem ipsum dolor sit amet consectetur. Suspendisse nisl
                      ornare nisl est pulvinar pulvinar morbi.
                    </small>
                  </div>
                  <div className="row row_1 ">
                    <header>Informe Historial</header>
                    <small className="megamenu_desc">
                      Entérate de todo el historial de un vehículo usado al
                      instante
                    </small>
                  </div>
                  <div className="row row_1 ">
                    <header>Informe de precio</header>
                    <small className="megamenu_desc">
                      Conoce el real valor de mercado de tu auto
                    </small>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <a href="#" className="desktop-item">
                Vende tu auto
                <img
                  src={bottomArrow}
                  style={{ height: "16px", width: "16px" }}
                  alt=""
                />
              </a>
              <input  checked={showDropDownPhn === 2 ? true : false} type="checkbox" id="showMega2" />
              <label  onClick={() => showDropDownPhn !== 2  ?  setShowDropDownPhn(2) :  setShowDropDownPhn(null)} htmlFor="showMega2" className="mobile-item">
                <small> Vende tu auto</small>
                <img
                  src={bottomArrow}
                  style={{ height: "24px", width: "24px" }}
                  alt=""
                />
              </label>
              <div className="mega-box">
                <div className="content">
                  <div className="row row_1 bg_red">
                    <header>Informe Autosafe</header>
                    <small className="megamenu_desc">
                      Lorem ipsum dolor sit amet consectetur. Suspendisse nisl
                      ornare nisl est pulvinar pulvinar morbi.
                    </small>
                  </div>
                  <div className="row row_1 ">
                    <header>Informe Historial</header>
                    <small className="megamenu_desc">
                      Entérate de todo el historial de un vehículo usado al
                      instante
                    </small>
                  </div>
                  <div className="row row_1 ">
                    <header>Informe de precio</header>
                    <small className="megamenu_desc">
                      Conoce el real valor de mercado de tu auto
                    </small>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <a href="#" className="desktop-item">
                Servicios complementarios
                <img
                  src={bottomArrow}
                  style={{ height: "16px", width: "16px" }}
                  alt=""
                />
              </a>
              <input checked={showDropDownPhn === 3 ? true : false} type="checkbox" id="showMega3" />
              <label  onClick={() => showDropDownPhn !== 3  ?  setShowDropDownPhn(3) :  setShowDropDownPhn(null)} htmlFor="showMega3" className="mobile-item">
                <small> Servicios complementarios</small>
                <img
                  src={bottomArrow}
                  style={{ height: "24px", width: "24px" }}
                  alt=""
                />
              </label>
              <div className="mega-box">
                <div className="content">
                  <div className="row row_1 bg_red">
                    <header>Informe Autosafe</header>
                    <small className="megamenu_desc">
                      Lorem ipsum dolor sit amet consectetur. Suspendisse nisl
                      ornare nisl est pulvinar pulvinar morbi.
                    </small>
                  </div>
                  <div className="row row_1 ">
                    <header>Informe Historial</header>
                    <small className="megamenu_desc">
                      Entérate de todo el historial de un vehículo usado al
                      instante
                    </small>
                  </div>
                  <div className="row row_1 ">
                    <header>Informe de precio</header>
                    <small className="megamenu_desc">
                      Conoce el real valor de mercado de tu auto
                    </small>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <label htmlFor="menu-btn" className="btn menu-btn ">
            <i
              className="fa-solid fa-ellipsis-vertical"
              style={{ marginTop: "15px" }}
            ></i>
          </label>
        </div>
      </nav>
    </div>
  );
};

export default Header2;



// import logo from "../../assets/Logo.png";
// import bottomArrow from "../../assets/bottomarrow.png";
// import { useState } from "react";

// const Header2 = () => {
//   const [colorChange, setColorchange] = useState(false);
//   const [showMega,setShowMega]=useState(null)

//   const changeNavbarColor = () => {
//     if (window.scrollY >= 80) {
//       setColorchange(true);
//     } else {
//       setColorchange(false);
//     }
//   };
//   window.addEventListener("scroll", changeNavbarColor);
//   return (
//     <div className="">
//       <nav className={colorChange ? "navbar_colorChange" : "main_navbar"}>
//         <div className="wrapper">
//           <div className="logo">
//             <a href="#">
//               <img src={logo} alt="" />
//             </a>
//           </div>
//           <input type="radio" name="slider" id="menu-btn" />
//           <input type="radio" name="slider" id="close-btn" />
//           <ul className="nav-links">
//             <label
//               htmlFor="close-btn"
//               className="btn close-btn mobile_design_navbar"
//             >
//               <img src={logo} alt="" />
//               <i className="fas fa-times"></i>
//             </label>
//             <hr className="hr_nav" />
//             <li>
//               <input type="checkbox" id="" />
//                 <div className="mobile_top_links">
//                   <a href="/" className="">
//                     Empresa
//                   </a>
//                   <a href="/" className="">
//                     Quienes somos
//                   </a>
//                   <a href="/" className="">
//                     Blog
//                   </a>
//                   <a href="/" className="">
//                     Contacto
//                   </a>
//                 </div>
//               <hr />
//                <div className="mega-box">
//                 <div className="content">
//                   <div className="row row_1 bg_red">
//                     <header>Informe Autosafe</header>
//                     <small className="megamenu_desc">
//                       Lorem ipsum dolor sit amet consectetur. Suspendisse nisl
//                       ornare nisl est pulvinar pulvinar morbi.
//                     </small>
//                   </div>
//                   <div className="row row_1 ">
//                     <header>Informe Historial</header>
//                     <small className="megamenu_desc">
//                       Entérate de todo el historial de un vehículo usado al
//                       instante
//                     </small>
//                   </div>
//                   <div className="row row_1 ">
//                     <header>Informe de precio</header>
//                     <small className="megamenu_desc">
//                       Conoce el real valor de mercado de tu auto
//                     </small>
//                   </div>
//                 </div>
//               </div>
//             </li>
//             <li>
//               <a href="#" className="desktop-item">
//                 Informes autosafe
//                 <img
//                   src={bottomArrow}
//                   style={{ height: "16px", width: "16px" }}
//                   alt=""
//                 />
//               </a>
//               <input type="checkbox" id="showMega" />
//               <label htmlFor="showMega" className="mobile-item">
//                 <small> Informes autosafe</small>
//                 <img
//                   src={bottomArrow}
//                   style={{ height: "24px", width: "24px" }}
//                   alt=""
//                 />
//               </label>
         

//               {/* desktop */}
//               <div className="mega-box">
//                 <div className="content">
//                   <div className="row row_1 bg_red">
//                     <header>Informe Autosafe</header>
//                     <small className="megamenu_desc">
//                       Lorem ipsum dolor sit amet consectetur. Suspendisse nisl
//                       ornare nisl est pulvinar pulvinar morbi.
//                     </small>
//                   </div>
//                   <div className="row row_1 " >
//                     <header>Informe Historial</header>
//                     <small className="megamenu_desc">
//                       Entérate de todo el historial de un vehículo usado al
//                       instante
//                     </small>
//                   </div>
//                   <div className="row row_1 ">
//                     <header>Informe de precio</header>
//                     <small className="megamenu_desc">
//                       Conoce el real valor de mercado de tu auto
//                     </small>
//                   </div>
//                 </div>
//               </div>
//             </li>

//             <li>
//               <a href="#" className="desktop-item">
//                 Transferencia de dominio
//                 <img
//                   src={bottomArrow}
//                   style={{ height: "16px", width: "16px" }}
//                   alt=""
//                 />
//               </a>
//               <input type="checkbox" id="showMega1" />
//               <label htmlFor="showMega1" className="mobile-item">
//                 <small> Transferencia de dominio</small>
//                 <img
//                   src={bottomArrow}
//                   style={{ height: "24px", width: "24px" }}
//                   alt=""
//                 />
//               </label>
//               <div className="mega-box">
//                 <div className="content">
//                   <div className="row row_1 bg_red">
//                     <header>Informe Autosafe</header>
//                     <small className="megamenu_desc">
//                       Lorem ipsum dolor sit amet consectetur. Suspendisse nisl
//                       ornare nisl est pulvinar pulvinar morbi.
//                     </small>
//                   </div>
//                   <div className="row row_1 ">
//                     <header>Informe Historial</header>
//                     <small className="megamenu_desc">
//                       Entérate de todo el historial de un vehículo usado al
//                       instante
//                     </small>
//                   </div>
//                   <div className="row row_1 ">
//                     <header>Informe de precio</header>
//                     <small className="megamenu_desc">
//                       Conoce el real valor de mercado de tu auto
//                     </small>
//                   </div>
//                 </div>
//               </div>
//             </li>
//             <li>
//               <a href="#" className="desktop-item">
//                 Vende tu auto
//                 <img
//                   src={bottomArrow}
//                   style={{ height: "16px", width: "16px" }}
//                   alt=""
//                 />
//               </a>
//               <input type="checkbox" id="showMega2" />
//               <label htmlFor="showMega2" className="mobile-item">
//                 <small> Vende tu auto</small>
//                 <img
//                   src={bottomArrow}
//                   style={{ height: "24px", width: "24px" }}
//                   alt=""
//                 />
//               </label>
//               <div className="mega-box">
//                 <div className="content">
//                   <div className="row row_1 bg_red">
//                     <header>Informe Autosafe</header>
//                     <small className="megamenu_desc">
//                       Lorem ipsum dolor sit amet consectetur. Suspendisse nisl
//                       ornare nisl est pulvinar pulvinar morbi.
//                     </small>
//                   </div>
//                   <div className="row row_1 ">
//                     <header>Informe Historial</header>
//                     <small className="megamenu_desc">
//                       Entérate de todo el historial de un vehículo usado al
//                       instante
//                     </small>
//                   </div>
//                   <div className="row row_1 ">
//                     <header>Informe de precio</header>
//                     <small className="megamenu_desc">
//                       Conoce el real valor de mercado de tu auto
//                     </small>
//                   </div>
//                 </div>
//               </div>
//             </li>
//             <li>
//               <a href="#" className="desktop-item">
//                 Servicios complementarios
//                 <img
//                   src={bottomArrow}
//                   style={{ height: "16px", width: "16px" }}
//                   alt=""
//                 />
//               </a>
//               <input type="checkbox" id="showMega3" />
//               <label htmlFor="showMega3" className="mobile-item">
//                 <small> Servicios complementarios</small>
//                 <img
//                   src={bottomArrow}
//                   style={{ height: "24px", width: "24px" }}
//                   alt=""
//                 />
//               </label>
//               <div className="mega-box">
//                 <div className="content">
//                   <div className="row row_1 bg_red">
//                     <header>Informe Autosafe</header>
//                     <small className="megamenu_desc">
//                       Lorem ipsum dolor sit amet consectetur. Suspendisse nisl
//                       ornare nisl est pulvinar pulvinar morbi.
//                     </small>
//                   </div>
//                   <div className="row row_1 ">
//                     <header>Informe Historial</header>
//                     <small className="megamenu_desc">
//                       Entérate de todo el historial de un vehículo usado al
//                       instante
//                     </small>
//                   </div>
//                   <div className="row row_1 ">
//                     <header>Informe de precio</header>
//                     <small className="megamenu_desc">
//                       Conoce el real valor de mercado de tu auto
//                     </small>
//                   </div>
//                 </div>
//               </div>
//             </li>
//           </ul>
//           <label htmlFor="menu-btn" className="btn menu-btn ">
//             <i
//               className="fa-solid fa-ellipsis-vertical"
//               style={{ marginTop: "15px" }}
//             ></i>
//           </label>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Header2;
