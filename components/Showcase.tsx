import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { IRecipe } from "../interfaces/IRecipe";
import styles from "../styles/Showcase.module.scss";
import Image from "next/image";
import Link from "next/link";

interface ShowcaseProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  recipe: IRecipe;
}

const Showcase: React.FC<ShowcaseProps> = ({ recipe }) => {
  return (
    <div className={styles.imageWrapper}>
      <Image
        className={styles.image}
        src={`https:${recipe.image.fields.file.url}`}
        objectFit="cover"
        layout="fill"
      />
      <div className={styles.card}>
        <p className={styles.title}>{recipe.name}</p>
        <p className={styles.description}>{recipe.subtitle}</p>
        <Link href={`/recipes/${recipe.slug}`}>
          <a className={styles.link}>Get the recipe &gt;</a>
        </Link>
      </div>
    </div>
  );
};

export default Showcase;
