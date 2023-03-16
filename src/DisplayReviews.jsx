import { useEffect, useState } from "react";
import Review from "./Review";
import { getReviews } from "./Api";
import { Link } from "react-router-dom";
import SortByCatergory from "./SortByCatergory";

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
        <div>
          <SortByCatergory />
          {reviews.map((review) => {
            return (
              <div key={review.review_id}>
                <Link to={`/review/${review.review_id}`}>
                  <Review review={review} />
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default DisplayReviews;
