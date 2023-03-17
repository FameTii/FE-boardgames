import { useState } from "react";
import { postComment } from "./Api";

const PostComments = ({ reviewId, setNewComment }) => {
  const [comment, setComment] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const onChangeInput = (event) => {
    if (event.target.value === "") {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }
    setComment(event.target.value);
  };
  

  const postNewComment = (event) => {
    event.preventDefault();
    if (comment.trim() === "") {
      setIsEmpty(true);
      return;
    }
    setIsEmpty(false);
    setError(null);
    setIsLoading(true);
    postComment(reviewId, comment, "grumpy19")
      .then((obj) => {
        setNewComment(obj.data);
        setIsLoading(false);
        setComment("");
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
            <input
              className="addComment"
              placeholder="Post a comment"
              onChange={onChangeInput}
              value={comment}
            ></input>
            <button type="submit">Post</button>
          </form>
        )}
        {isEmpty && <p>Write something if you want to post something</p>}
      </div>
    </div>
  );
};

export default PostComments;
