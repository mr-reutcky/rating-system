import { useState } from "react";
import Star from "./Star";

const labels = [
  "This was absolutely terrible — I wouldn't recommend it to anyone.",
  "Not great — I had several issues and it didn’t meet my expectations.",
  "It was okay — some good parts, but also room for improvement.",
  "Quite good — I enjoyed it and would consider using it again.",
  "Excellent — I loved it and would highly recommend it!"
];

function StarRating() {
  const [rating, setRating] = useState(0);

  return (
    <div className="rating-container">
      <div className="stars">
        {[...Array(5)].map((_, i) => (
          <Star key={i} selected={i < rating} onClick={() => setRating(i + 1)} />
        ))}
      </div>
      <h2 className="label-text">{rating > 0 ? labels[rating - 1] : "Rate this"}</h2>
    </div>
  );
}

export default StarRating;
