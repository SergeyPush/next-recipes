import React from "react";
import styles from "../styles/TagComponent.module.scss";
interface TagComponentInterface {
  tags: [string];
}

const TagComponent: React.FC<TagComponentInterface> = ({ tags }) => {
  const renderTags = tags.map((tag, index) => (
    <div key={index} className={styles.tag}>
      {tag}
    </div>
  ));
  return <div>{renderTags}</div>;
};

export default TagComponent;
