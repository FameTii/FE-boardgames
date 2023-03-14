import { useEffect, useState } from "react";
import Review from "./Review";
import { getReviews } from "./Controller";

const DisplayReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getReviews({ setReviews });
    setIsLoading(false);
  }, []);

  return (
    <div>
      {isLoading ? (
        <p>Loading items</p>
      ) : (
        reviews.map((review) => {
          return (
            <div key={review.review_id}>
              <Review review={review} />
            </div>
          );
        })
      )}
    </div>
  );
};

export default DisplayReviews;
