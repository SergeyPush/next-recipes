import React from "react";
import Image from "next/image";
import { IRecipe } from "../interfaces/IRecipe";
import styles from "../styles/Card.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import Rating from "./Rating";
import Link from "next/link";

interface CardProps {
  recipe: IRecipe;
}

const Card: React.FC<CardProps> = ({ recipe }) => {
  return (
    <Link href={`/recipes/${recipe.slug}`}>
      <div className={styles.card}>
        <div className={styles.imageWrapper}>
          <Image
            src={"https:" + recipe.image.fields.file.url}
            className={styles.image}
            layout={"fill"}
            objectFit={"cover"}
          />
        </div>
        <div className={styles.contentWrapper}>
          <p className={styles.tag}>{recipe.tags[0]}</p>
          <p className={styles.name}>{recipe.name}</p>
          <div className={styles.footer}>
            <span className={styles.time}>
              <FontAwesomeIcon icon={faClock} /> {recipe.time}
            </span>
            <span className={styles.rating}>
              <Rating rating={recipe.rating} />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
