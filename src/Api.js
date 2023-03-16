import axios from "axios";
import { formatDate } from "./utilities";

const getReviews = () => {
  return axios
    .get("https://fame-boardgame-review-website.onrender.com/api/reviews")
    .then(({ data }) => {
      return data.reviews;
    });
};

const getReviewById = (reviewId) => {
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

const getComments = (reviewId) => {
  return axios
    .get(
      `https://fame-boardgame-review-website.onrender.com/api/reviews/${reviewId}/comments`
    )
    .then(({ data }) => {
      console.log(data);
      return data.comments;
    });
};

const updateVotes = (reviewId, value) => {
  return axios
    .patch(
      `https://fame-boardgame-review-website.onrender.com/api/reviews/${reviewId}`,
      { inc_votes: value }
    )
    .then(({ data }) => {
      return data.inc_votes;
    });
};

const getCategory = (category) => {
  return axios
    .get(
      `https://fame-boardgame-review-website.onrender.com/api/reviews?category=${category}`
    )
    .then(({ data }) => {
      return data.reviews;
    });
};

export { getReviews, getReviewById, getComments, updateVotes, getCategory };
