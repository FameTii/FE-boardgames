import { useEffect, useState } from "react";
import { postComment } from "./Api";

const PostComments = ({ reviewId, setNewComment }) => {
  const [comment, setComment] = useState([]);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const postNewComment = (event) => {
    event.preventDefault();
    if (event.target[0].value === "") {
      setIsEmpty(true);
      return;
    }
    setIsEmpty(false);
    setError(null);
    setComment(event.target[0].value);
    setIsLoading(true);
    postComment(reviewId, event.target[0].value, "grumpy19")
      .then((obj) => {
        setNewComment(obj);
        event.target[0].value = "";
        setIsLoading(false);
      })
      .catch((err) => {
        setError({ err });
      });
  };

  return (
    <div>
      <div style={{ display: error ? "block" : "none" }}>
        <p>Please check your internet connection</p>
      </div>
      <div className="postCommentsBox">
        {isLoading & !error ? (
          <p>Posting Comment...</p>
        ) : (
          <form onSubmit={postNewComment}>
            <input className="addComment" placeholder="Post a comment"></input>
            <button type="submit">Post</button>
          </form>
        )}
        {isEmpty ? (
          <p>type something in if you want to post something</p>
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
};

export default PostComments;
