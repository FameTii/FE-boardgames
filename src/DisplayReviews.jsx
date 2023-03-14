import { useEffect, useState } from "react";
import Review from "./Review";
import { getReviews } from "./Api";
import { Link } from "react-router-dom";

const DisplayReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getReviews().then((reviews) => {
      setReviews(reviews);
      setIsLoading(false);
    });
  }, []);

  return (
    <div>
      {isLoading ? (
        <p>Loading items...</p>
      ) : (
        reviews.map((review) => {
          return (
            <div key={review.review_id}>
              <Link to={`/review/${review.review_id}`}>
                <Review review={review} />
              </Link>
            </div>
          );
        })
      )}
    </div>
  );
};

export default DisplayReviews;
