import axios from "axios";
import { formatDate } from "./utilities";

const getReviews = ({ setReviews }) => {
  axios
    .get("https://fame-boardgame-review-website.onrender.com/api/reviews")
    .then(({ data }) => {
      setReviews(data.reviews);
    });
};

const getReviewById = ({ setReview, reviewId }) => {
  axios
    .get(
      `https://fame-boardgame-review-website.onrender.com/api/reviews/${reviewId}`
    )
    .then(({ data }) => {
      const review = data.review;
      review.created_at = formatDate(review.created_at);
      setReview(review);
    });
};

export { getReviews, getReviewById };
