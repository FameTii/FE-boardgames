import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { getReviewById } from "./Api";
import Comments from "./Comments";
import Voting from "./Voting";

const IndividualReview = () => {
  let { reviewId } = useParams();
  const [review, setReview] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getReviewById(reviewId).then((review) => {
      setReview(review);
      setIsLoading(false);
    });
  }, []);

  return (
    <div>
      {isLoading ? (
        <p>Loading the review...</p>
      ) : (
        <div>
          <div>
            <Link to={"/"}>
              <button>Back to homepage</button>
            </Link>

            <div>
              <Voting review={review} />
            </div>
          </div>
          <article className="individualReview">
            <p className="owner">{review.owner}</p>
            <p className="date">Date: {review.created_at}</p>
            <p className="title">{review.title}</p>
            <img alt="" className="image" src={review.review_img_url} />
            <p className="category">Category: {review.category}</p>
            <p className="designer">Designer: {review.designer}</p>
            <p className="review">{review.review_body}</p>
          </article>
          <div>
            <Comments reviewId={reviewId} />
          </div>
        </div>
      )}
    </div>
  );
};

export default IndividualReview;
