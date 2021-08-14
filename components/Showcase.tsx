import React from "react";
import { IRecipe } from "../interfaces/IRecipe";
import Image from "next/image";
import styles from "../styles/Showcase.module.scss";

interface ShowcaseProps {
  recipe: IRecipe;
}

const Showcase: React.FC<ShowcaseProps> = ({ recipe }) => {
  return (
    <div className={styles.imageWrapper}>
      <Image
        className={styles.image}
        src={`https://${recipe.image.fields.file.url}`}
        objectFit="cover"
        layout="fill"
      />
    </div>
  );
};

export default Showcase;
