import axios from "axios";
import { formatDate } from "./utilities";

const getReviews = (sortBy, orderBy) => {
  if (sortBy === "") {
    sortBy = null;
  }
  if (orderBy === "") {
    orderBy = null;
  }
  let url = "https://fame-boardgame-review-website.onrender.com/api/reviews";
  if ((sortBy !== null) & (orderBy !== null)) {
    url += `?sortBy=${sortBy}&orderBy=${orderBy}`;
  } else if ((sortBy === null) & (orderBy !== null)) {
    url += `?orderBy=${orderBy}`;
  } else if ((orderBy === null) & (sortBy !== null)) {
    url += `?sortBy=${sortBy}`;
  }
  console.log(url);
  return axios.get(url).then(({ data }) => {
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

export { getReviews, getReviewById, getComments, updateVotes };
