import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as empty } from "@fortawesome/free-regular-svg-icons";
import { faStar as filled } from "@fortawesome/free-solid-svg-icons";

interface RatingProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  rating: number;
}

const Rating: React.FC<RatingProps> = ({ rating, ...props }) => {
  const buildRating = Array.from({ length: 5 })
    .fill("<></>")
    .map((item, index) =>
      index < rating ? (
        <FontAwesomeIcon icon={filled} key={index} />
      ) : (
        <FontAwesomeIcon icon={empty} key={index} />
      )
    );

  return <div {...props}>{buildRating}</div>;
};

export default Rating;
