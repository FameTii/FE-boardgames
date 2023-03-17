import { useState } from "react";
import { updateVotes } from "./Api";

const Voting = ({ review }) => {
  const [vote, setVote] = useState(review.votes);
  const [userVote, setUserVote] = useState("");
  const [hasVoted, setHasVoted] = useState(false);
  const [error, setError] = useState(null);

  const likeVote = () => {
    setUserVote("Like");
    setHasVoted(true);
    updateVotes(review.review_id, 1)
      .then(() => {
        setVote(vote + 1);
        setError(null);
      })
      .catch((err) => {
        setError({ err });
        setHasVoted(false);
      });
  };

  const dislikeVote = () => {
    setUserVote("Dislike");
    setHasVoted(true);
    updateVotes(review.review_id, -1)
      .then(() => {
        setVote(vote - 1);
        setError(null);
      })
      .catch((err) => {
        setError({ err });
        setHasVoted(false);
      });
  };

  const undoVote = () => {
    if (userVote === "Like") {
      dislikeVote();
    } else if (userVote === "Dislike") {
      likeVote();
    } else {
      throw console.error("errrr");
    }
    setUserVote("");
    setHasVoted(false);
  };

  return (
    <div>
      <div style={{ display: error ? "block" : "none" }}>
        <p>Please check your internet connection</p>
      </div>
      <div style={{ display: hasVoted ? "none" : "block" }}>
        <button className="likeButton" onClick={likeVote}>
          Like
        </button>
        <button className="dislikeButton" onClick={dislikeVote}>
          Dislike
        </button>
      </div>
      <div style={{ display: hasVoted ? "block" : "none" }}>
        Thanks for voting
        <button onClick={undoVote}>Undo</button>
      </div>

      <p>Votes: {vote}</p>
    </div>
  );
};

export default Voting;
