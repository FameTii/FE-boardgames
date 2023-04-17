import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getReviews } from "./Api";
import Review from "./Review";
import { Link } from "react-router-dom";
import CategoryDropDown from "./CategoryDropDown";
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
  console.log(searchParams.get("sort_by"));
  console.log(searchParams.get("order_by"));

  return (
    <div>
      <CategoryDropDown />
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

export default DisplayReviews;
