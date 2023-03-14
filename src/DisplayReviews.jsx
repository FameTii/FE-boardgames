import { useEffect, useState } from "react";
import axios from "axios";
import Review from "./Review";

const DisplayReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://fame-boardgame-review-website.onrender.com/api/reviews")
      .then(({ data }) => {
        setReviews(data.reviews);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      {isLoading ? (
        <p>Loading items</p>
      ) : (
        reviews.map((review) => {
          return (
            <div key = {review.review_id}>
            <Review review={review} />
            </div>
          );
        })
      )}
    </div>
  );
};

export default DisplayReviews;
