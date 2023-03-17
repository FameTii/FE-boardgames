import axios from "axios";
import { formatDate } from "./utilities";

const getReviews = (category, sortBy, orderBy) => {
  if (category === "") {
    category = null;
  }
  if (sortBy === "") {
    sortBy = null;
  }
  if (orderBy === "") {
    orderBy = null;
  }
  let url = "https://fame-boardgame-review-website.onrender.com/api/reviews";
  if (category !== null && sortBy !== null && orderBy !== null) {
    url += `?category=${category}&sortBy=${sortBy}&orderBy=${orderBy}`;
  } else if (sortBy === null && orderBy !== null && category !== null) {
    url += `?category=${category}&orderBy=${orderBy}`;
  } else if (orderBy === null && sortBy !== null && category !== null) {
    url += `?category=${category}&sortBy=${sortBy}`;
  } else if (sortBy !== null && orderBy !== null && category === null) {
    url += `?sortBy=${sortBy}&orderBy=${orderBy}`;
  } else if (sortBy === null && orderBy === null && category !== null) {
    url += `?category=${category}`;
  } else if (sortBy === null && orderBy !== null && category === null) {
    url += `?orderBy=${orderBy}`;
  } else if (orderBy === null && sortBy !== null && category === null) {
    url += `?sortBy=${sortBy}`;
  }
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
