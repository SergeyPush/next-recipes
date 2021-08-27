import React from "react";
import { IRecipe } from "../interfaces/IRecipe";
import styles from "../styles/Slider.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import Card from "./Card";

import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";

interface SliderProps {
  recipes: IRecipe[];
}

const Slider: React.FC<SliderProps> = ({ recipes }) => {
  SwiperCore.use([Navigation]);

  const breakpoints = {
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1280: {
      slidesPerView: 5,
      spaceBetween: 40,
    },
  };

  return (
    <div className={styles.wrapper}>
      <Swiper
        id="swiper-color"
        navigation={true}
        slidesPerView={5}
        freeMode={true}
        spaceBetween={40}
        breakpoints={breakpoints}
        className="mySwiper"
      >
        {recipes.map((recipe) => {
          return (
            <SwiperSlide key={recipe.slug}>
              <Card recipe={recipe} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Slider;
