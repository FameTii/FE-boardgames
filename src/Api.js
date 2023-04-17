import axios from "axios";
import { formatDate } from "./utilities";

const apiUrl = "https://fame-boardgame-review-website.onrender.com/api/reviews/";

const getReviews = (category, sortBy, orderBy) => {
  return axios
    .get(apiUrl, {
      params: { category, sortBy, orderBy },
    })
    .then(({ data }) => {
      return data.reviews;
    });
};

const getReviewById = (reviewId) => {
  return axios.get(apiUrl + `${reviewId}`).then(({ data }) => {
    const review = data.review;
    review.created_at = formatDate(review.created_at);
    return review;
  });
};

const getComments = (reviewId) => {
  return axios.get(apiUrl + `${reviewId}/comments`).then(({ data }) => {
    return data.comments;
  });
};

const postComment = (reviewId, comment, username) => {
  return axios.post(apiUrl + `${reviewId}/comments`, {
    username: username,
    body: comment,
  });
};

const updateVotes = (reviewId, value) => {
  return axios
    .patch(apiUrl + `${reviewId}`, { inc_votes: value })
    .then(({ data }) => {
      return data.inc_votes;
    });
};

export { getReviews, getReviewById, getComments, postComment, updateVotes };
