import Image from "next/image";
import styles from "../styles/ImageComponent.module.scss";
import React from "react";

interface ImageComponentProps {
  src: string;
  width?: number;
  height?: number;
  objectfit?: string;
  alt: string;
}

const ImageComponent: React.FC<ImageComponentProps> = ({
  src,
  width = 400,
  objectfit = "contain",
  alt,
}) => {
  return (
    <div className={styles.imageContainer}>
      <Image
        src={`https:${src}`}
        layout="fill"
        objectFit="cover"
        className={styles.image}
        alt={alt}
      />
    </div>
  );
};

export default ImageComponent;
