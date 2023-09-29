import { useRef } from "react";
import Slider from "react-slick";
import prev from "../../assets/prev.png";
import nextImage from "../../assets/next.png";
import Card from "./Card";
import styles from "./CardCarousal.module.css";
const CardCarousal = () => {
  const sliderRef = useRef<Slider | null>(null);
  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };
  const previous = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };
  const settings = {
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className={styles.card_container}>
      <p>Clientes felices</p>
      <div className={styles.carousal_header}>
        <h2>Empresas que confían en nosotros</h2>
        <div style={{ textAlign: "center" }} className="">
          <button className={styles.next_prev_btn} onClick={previous}>
            <img src={prev} alt="" />
          </button>
          <button className={styles.next_prev_btn} onClick={next}>
            <img src={nextImage} alt="" />
          </button>
        </div>
      </div>
      <Slider ref={sliderRef} {...settings} className="slider">
        <div key={1} >
          <Card />
        </div>
        <div key={2}>
          <Card />
        </div>
        <div key={3}>
          <Card />
        </div>
        <div key={4}>
          <Card />
        </div>
        <div key={5}>
          <Card />
        </div>
        <div key={6}>
          <Card />
        </div>
      </Slider>
    </div>
  );
};

export default CardCarousal;
