// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SwiperNavButton from "./SwiperNavButton";
import Card from "./Card";
import blur from "../../assets/orangeBlur.png";

const Carousal = () => {
  return (
    <div className="carousal_parent_container">
      <div className="container_width ">
        <div className="carousal_swiper">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            slidesPerView={1}
            spaceBetween={10}
            loop={true}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 16,
              },

              768: {
                slidesPerView: 2,
                spaceBetween: 16,
              },

              1024: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
            }}
          >
            <SwiperSlide>
              <Card />
            </SwiperSlide>
            <SwiperSlide>
              <Card />
            </SwiperSlide>
            <SwiperSlide>
              <Card />
            </SwiperSlide>
            <SwiperSlide>
              <Card />
            </SwiperSlide>
            <SwiperSlide>
              <Card />
            </SwiperSlide>
            <SwiperSlide>
              <Card />
            </SwiperSlide>
            <div className="header_car">
              <div className="header_carousal">
                <p>Clientes felices</p>

                <h2>Empresas que confían en nosotros</h2>
              </div>
            </div>
            <SwiperNavButton />
          </Swiper>
        </div>
        <div className="round_blur_carousal">
          <img className="img-fluid" src={blur} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Carousal;
