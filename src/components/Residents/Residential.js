import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css"
import "./Residential.css";
import products from "./Product";
import { sliderSettings } from "../../utils/common";
const Residential = () => {
  return (
    <section className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart">
          <span className="orangeText">Best Choices</span>
          <span className="primaryText">Popular Residencies</span>
        </div>

        <Swiper {...sliderSettings}>
            <SliderButtons/>
          {products.map((items, i) => (
            <SwiperSlide key={i}>
              <div className=" flexColStart r-card">
                <img src={items.imgg} alt="" />

                <span className="secondaryText r-price">
                  <span style={{ color: "orange" }}> $</span>
                  <span>{items.price}</span>
                </span>
                <span className="primaryText">{items.name}</span>
                <span className="secondaryText">{items.detail}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Residential;

const SliderButtons=()=>{
    const swiper = useSwiper();
    return(
        <div className="flexCenter r-buttons">
            <button onClick={()=> swiper.slidePrev()}>&lt;</button>
            <button onClick={()=> swiper.slideNext()}>&gt;</button>
        </div>
    );
};