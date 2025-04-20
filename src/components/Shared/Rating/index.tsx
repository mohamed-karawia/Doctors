import { FC } from "react";
import { Rating as RatingComponent } from "react-simple-star-rating";

type RatingProps = {
  value: number;
};

const Rating: FC<RatingProps> = ({ value }) => {
  return <RatingComponent initialValue={value} size={20} readonly />;
};

export default Rating;
