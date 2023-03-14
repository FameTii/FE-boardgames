const Review = ({ review }) => {
  return (
    <div className="displayReviewsBox">
      <p className="owner">{review.owner}</p>
      <p className="date">Date: {review.created_at}</p>
      <p className="title">{review.title}</p>
      <img className="image" src={review.review_img_url} />
      <p className="category">Category: {review.category}</p>
      <p className="designer">Designer: {review.designer}</p>
      {/* <p className="review">{review.review_body}</p> */}
      <p className="votes">Votes: {review.votes}</p>
    </div>
  );
};

export default Review;
