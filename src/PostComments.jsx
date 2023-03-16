import { useEffect, useState } from "react";
import { postComment } from "./Api";

const PostComments = ({ reviewId, setNewComment }) => {
  const [comment, setComment] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const postNewComment = (event) => {
    event.preventDefault();
    setComment(event.target[0].value);
    setIsLoading(true);
    postComment(reviewId, event.target[0].value, "grumpy19").then((obj) => {
      setNewComment(obj);
      event.target[0].value = "";
      setIsLoading(false);
    });
  };

  return (
    <div className="postCommentsBox">
      {isLoading ? (
        <p>Posting Comment</p>
      ) : (
        <form onSubmit={postNewComment}>
          <input className="addComment" placeholder="Post a comment"></input>
          <button type="submit">Post</button>
        </form>
      )}
    </div>
  );
};

export default PostComments;
