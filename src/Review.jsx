import { formatDate } from "./utilities";

const Review = ({ review }) => {
  review.created_at = formatDate(review.created_at);

  return (
    <div className="displayReviewsBox">
      <p className="title">{review.title}</p>
      <img alt="" className="image" src={review.review_img_url} />
      <p className="owner">{review.owner}</p>
      <p className="date">Date: {review.created_at}</p>
      <p className="category">Category: {review.category}</p>
      <p className="designer">Designer: {review.designer}</p>
      <p className="votes">Votes: {review.votes}</p>
    </div>
  );
};

export default Review;
