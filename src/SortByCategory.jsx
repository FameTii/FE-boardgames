import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getReviews } from "./Api";
import Review from "./Review";
import { Link } from "react-router-dom";

const SortByCategory = () => {
  let { category } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (category === undefined) {
      category = "";
    }
    getReviews(category, "", "").then((data) => {
      setReviews(data);
      setIsLoading(false);
    });
  }, [category]);

  return (
    <div>
      {isLoading ? (
        <p>Loading items...</p>
      ) : (
        <div>
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

export default SortByCategory;