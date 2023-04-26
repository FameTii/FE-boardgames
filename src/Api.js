import axios from "axios";
import { formatDate } from "./utilities";

const reviewApiUrl =
  "https://fame-boardgame-review-website.onrender.com/api/reviews/";

const apiUrl = "https://fame-boardgame-review-website.onrender.com/api/";

const getReviews = (category, sortBy, orderBy) => {
  return axios
    .get(reviewApiUrl, {
      params: { category, sortBy, orderBy },
    })
    .then(({ data }) => {
      return data.reviews;
    });
};

const getReviewById = (reviewId) => {
  return axios.get(reviewApiUrl + `${reviewId}`).then(({ data }) => {
    const review = data.review;
    review.created_at = formatDate(review.created_at);
    return review;
  });
};

const getComments = (reviewId) => {
  return axios.get(reviewApiUrl + `${reviewId}/comments`).then(({ data }) => {
    return data.comments;
  });
};

const postComment = (reviewId, comment, username) => {
  return axios.post(reviewApiUrl + `${reviewId}/comments`, {
    username: username,
    body: comment,
  });
};

const updateVotes = (reviewId, value) => {
  return axios
    .patch(reviewApiUrl + `${reviewId}`, { inc_votes: value })
    .then(({ data }) => {
      return data.inc_votes;
    });
};

const deleteComment = (commentId) => {
  return axios.delete(apiUrl + `comments/${commentId}`).then(({ data }) => {
    console.log(data);
  });
};

export {
  getReviews,
  getReviewById,
  getComments,
  postComment,
  updateVotes,
  deleteComment,
};
