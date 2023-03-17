import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getReviews } from "./Api";
import Review from "./Review";
import { Link, useSearchParams } from "react-router-dom";
import CategoryDropDown from "./CategoryDropDown";
import SortBy from "./SortBy";

const DisplayReviews = () => {
  let { category } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getReviews(
      category,
      searchParams.get("sort_by"),
      searchParams.get("orderBy")
    ).then((reviews) => {
      setReviews(reviews);
      setIsLoading(false);
    });
  }, [category, searchParams]);
  
  return (<div>
    <CategoryDropDown />
    <SortBy />
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
