import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useParams } from "react-router";
import { Link } from "react-router-dom";

const IndividualReview = () => {
  let { reviewId } = useParams();
  const [review, setReview] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://fame-boardgame-review-website.onrender.com/api/reviews/${reviewId}`
      )
      .then(({ data }) => {
        setReview(data.review);
      });
  }, []);

  return (
    <div className="individualReview">
      <div>
        <Link to={"/"}>
          <button>Back to homepage</button>
        </Link>
      </div>
      <p className="owner">{review.owner}</p>
      <p className="date">Date: {review.created_at}</p>
      <p className="title">{review.title}</p>
      <img className="image" src={review.review_img_url} />
      <p className="category">Category: {review.category}</p>
      <p className="designer">Designer: {review.designer}</p>
      <p className="review">{review.review_body}</p>
      <p className="votes">Votes: {review.votes}</p>
    </div>
  );
};

export default IndividualReview;
