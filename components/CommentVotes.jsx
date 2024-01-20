import { useEffect, useState } from "react";
import { patchCommentVotes } from "../api";

export default function CommentVotes({ comment }) {
  const [votes, setVotes] = useState(comment.votes);
  const [isFailedRequest, setIsFailedRequest] = useState(false);

  function handleVote(comment, vote) {
    let updatedVotes = votes;

    if (vote > 0) {
      updatedVotes++;
    } else {
      updatedVotes--;
    }
    setVotes(updatedVotes);
    patchCommentVotes(comment, { inc_votes: vote })
    .then((updatedComment) => {
        setVotes(updatedComment.votes)
    })
    .catch(() => {
      setIsFailedRequest(true);
    });
  }

  return (
    <div>
      <p className="votes">votes: {votes}</p>
      <button
        className="button green-button"
        onClick={() => handleVote(comment.comment_id, 1)}
      >
        Upvote
      </button>
      <button
        className="button red-button"
        onClick={() => handleVote(comment.comment_id, -1)}
      >
        Downvote
      </button>
      <p className="error-message">
        {isFailedRequest
          ? "Vote registration failed. Please refresh and try again."
          : null}
      </p>
    </div>
  );
}
