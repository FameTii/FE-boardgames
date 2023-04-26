import { useEffect, useState } from "react";
import { deleteComment, getComments } from "./Api";
import PostComments from "./PostComments";

const Comments = ({ reviewId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getComments(reviewId).then((comments) => {
      setComments(comments);
      setIsLoading(false);
    });
  }, [reviewId]);

  const deleteCommentById = (commentId) => {
    deleteComment(commentId)
      .then(() => {
        setComments(
          comments.filter((comment) => comment.comment_id !== commentId)
        );
      })
      .then(() => {
        window.location.reload(true);
      })
      .catch((error) => {
        console.log("Error deleting comment:", error);
      });
  };

  return (
    <div className="commentsBox">
      <p>Comments ({comments.length})</p>
      <PostComments reviewId={reviewId} setNewComment={setNewComment} />

      <div>
        {newComment ? (
          <div className="newUsercomments" key={newComment.comment_id}>
            <p id="commentAuthor">{newComment.author}:</p>
            <p id="commentBody">{newComment.body}</p>
          </div>
        ) : (
          <p></p>
        )}
      </div>

      {isLoading ? (
        <p>Loading Comments...</p>
      ) : (
        comments.map((comment) => {
          return (
            <div className="comments" key={comment.comment_id}>
              <p id="commentAuthor">{comment.author}:</p>
              <p id="commentBody">{comment.body}</p>
              <div>
                <button
                  onClick={() => {
                    deleteCommentById(`${comment.comment_id}`);
                  }}
                >
                  DELETE
                </button>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Comments;
