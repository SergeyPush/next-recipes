import React from "react";
import styles from "../styles/RichText.module.scss";
import { Document } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

interface RichTextProps {
  text: Document;
  options?: object;
}

const RichText: React.FC<RichTextProps> = ({ text, options, ...props }) => {
  return (
    <div {...props} className={styles.text}>
      {documentToReactComponents(text, options)}
    </div>
  );
};

export default RichText;
