import { useEffect, useState } from "react";
import { getComments } from "./Api";

const Comments = ( {reviewId} ) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getComments(reviewId).then((comments) => {
      console.log(comments);
      setComments(comments);
      setIsLoading(false);
    });
  }, []);

  return (
    <div className="commentsBox">
      {isLoading ? (
        <p>Loading Comments...</p>
      ) : (
        comments.map((comment) => {
          return (
            <div className="comments" key={comment.comment_id}>
              <p id="commentAuthor">{comment.author}:</p>
              <p id="commentBody">{comment.body}</p>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Comments;
