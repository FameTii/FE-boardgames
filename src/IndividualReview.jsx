import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { getReviewById } from "./Api";
import { formatDate } from "./utilities";

const IndividualReview = () => {
  let { reviewId } = useParams();
  const [review, setReview] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [date, setDate] = useState("");

  useEffect(() => {
    setIsLoading(true);
    getReviewById({ setReview, reviewId });
    setIsLoading(false);
  }, []);

  // useEffect(()=>{
  //   console.log(Date.parse(review.created_at));
  //   // setDate(formatDate(Date.parse(review.created_at)));
  //   console.log(date);
  // }, review)

  return (
    <article className="individualReview">
      <div>
        <Link to={"/"}>
          <button>Back to homepage</button>
        </Link>
      </div>
      <p className="owner">{review.owner}</p>
      <p className="date">Date: {review.created_at}</p>
      <p className="title">{review.title}</p>
      <img alt="" className="image" src={review.review_img_url} />
      <p className="category">Category: {review.category}</p>
      <p className="designer">Designer: {review.designer}</p>
      <p className="votes">Votes: {review.votes}</p>
      <p className="review">{review.review_body}</p>
    </article>
  );
};

export default IndividualReview;
