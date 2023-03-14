import axios from "axios";
import { formatDate } from "./utilities";

const getReviews = () => {
  return axios
    .get("https://fame-boardgame-review-website.onrender.com/api/reviews")
    .then(({ data }) => {
      return data.reviews;
    });
};

const getReviewById = ({reviewId }) => {
  return axios
    .get(
      `https://fame-boardgame-review-website.onrender.com/api/reviews/${reviewId}`
    )
    .then(({ data }) => {
      const review = data.review;
      review.created_at = formatDate(review.created_at);
      return review;
    });
};

export { getReviews, getReviewById };
