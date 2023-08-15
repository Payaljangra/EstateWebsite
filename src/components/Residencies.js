import "./Residencies.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export function Residencies ({productt}){
  return (
    <section className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart">
          <span className="orangeText">Best Choices</span>
          <span className="primaryText">Popular Residencies</span>
        </div>
      
      <Swiper>
        <SwiperSlide>
          <div className=" flexColStart r-card">
          
            {/* <img src={require(`${__dirname}/../images/${productt.imgg}`)} alt=""/>   one method */}
            <img src={productt.imgg} alt="" />       
                {/* use when import at run time */}
            <span className="secondaryText r-price">
              <span style={{color:"orange"}}> $</span>
              <span>{productt.price}</span>
              </span>
              <span className="primaryText">{productt.name}</span>
              <span className="secondaryText">{productt.detail}</span>
          </div>
        </SwiperSlide>
      </Swiper>
      </div>
    </section>
  );
};


