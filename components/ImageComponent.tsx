import Image from "next/image";
import styles from "../styles/ImageComponent.module.scss";
import React from "react";

interface ImageComponentProps {
  src: string;
  width?: string;
  height?: string;
  objectfit?: string;
}

const ImageComponent: React.FC<ImageComponentProps> = ({
  src,
  width = "auto",
  height = "auto",
  objectfit = "contain",
}) => {
  return (
    <div className={styles.imageWrapper} style={{ width, height }}>
      <Image
        src={src}
        layout="responsive"
        width={width}
        height={height}
        // objectFit={"cover"}
        className={styles.image}
      />
    </div>
  );
};

export default ImageComponent;
