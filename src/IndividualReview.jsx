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
          <article className="individualReview">
            <div className="indRevMain">
              <p className="individualTitle">{review.title}</p>
              <img
                alt=""
                className="individualImage"
                src={review.review_img_url}
              />
            </div>
            <div className="indRevSub">
              <p className="individualOwner">Author: {review.owner}</p>
              <p className="individualDate">Date: {review.created_at}</p>
              <p className="individualCategory">Category: {review.category}</p>
              <p className="individualDesigner">Designer: {review.designer}</p>
              <p className="individualReviewBody">{review.review_body}</p>
              <br />
              <div className="likeDislike">
                <Voting review={review} />
              </div>
            </div>
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
