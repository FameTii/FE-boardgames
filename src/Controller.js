import axios from "axios";

const getReviews = ({ setReviews }) => {
  axios
    .get("https://fame-boardgame-review-website.onrender.com/api/reviews")
    .then(({ data }) => {
      setReviews(data.reviews);
    });
};

export { getReviews };
