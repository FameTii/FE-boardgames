import { useEffect, useState } from "react";
import { getReviews } from "./Api";
import Review from "./Review";
import { Link } from "react-router-dom";
import SortBy from "./SortBy";
import { useSearchParams } from "react-router-dom";

const DisplayReviews = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let category = searchParams.get("category");
    let sortBy = searchParams.get("sort_by");
    let orderBy = searchParams.get("order_by");

    getReviews(category, sortBy, orderBy).then((data) => {
      setReviews(data);
      setIsLoading(false);
    });
  }, [searchParams]);

  return (
    <div>
      <SortBy />
      {isLoading ? (
        <p>This page loads.. It just needs some time...</p>
      ) : (
        <div className="reviewBox">
          {reviews.map((review) => {
            return (
              <div className="allReviews" key={review.review_id}>
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
