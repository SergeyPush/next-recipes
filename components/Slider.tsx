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

  return (
    <div className={styles.wrapper}>
      <Swiper
        modules={[Navigation]}
        navigation={true}
        slidesPerView={5}
        freeMode={true}
        spaceBetween={40}
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
