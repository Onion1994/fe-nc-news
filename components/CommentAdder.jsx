import { useContext, useEffect, useState } from "react";
import { postComment } from "../api";
import { UserContext } from "../contexts/UserContext";

export default function CommentAdder({
  article,
  setCurrentComments,
  currentComments,
}) {
  const [newComment, setNewComment] = useState("");
  const { user } = useContext(UserContext);
  const [isSendError, setIsSendError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [limitExceeded, setLimitExceeded] = useState(false)
  
  const handleSubmit = (event, user, newComment, article) => {
    event.preventDefault();
    setIsLoading(true);
    const requestObject = {
      username: user,
      body: newComment,
    };
    postComment(article, requestObject)
      .then((res) => {
        setIsLoading(false);
        setNewComment("");
        const newCommentList = [res, ...currentComments];
        setCurrentComments(newCommentList);
        setIsSendError(false);
      })
      .catch(() => {
        setIsLoading(false);
        setIsSendError(true);
      });
  };

  useEffect(() => {
    if (newComment.length > 750) {
      setLimitExceeded(true)
    } else {
      setLimitExceeded(false)
    }
  }, [newComment])

  return (
    <form
      onSubmit={(event) => {
        handleSubmit(event, user, newComment, article);
      }}
      className="form-container"
    >
      <label htmlFor="add-comment">Add comment</label>
      <textarea
        placeholder="Type comment here..."
        rows="8"
        id="add-comment"
        required
        value={newComment}
        onChange={(event) => setNewComment(event.target.value)}
      ></textarea>
      {limitExceeded ? <p className='error-message'>{`Character limit exceeded by ${newComment.length - 750}`}</p>: `You have ${750 - newComment.length} characters remaining.`}
      <>
        {isLoading ? (
          <p>Posting comment...</p>
        ) : (
          <button disabled={limitExceeded} type="submit" className="button blue-button">
            Send!
          </button>
        )}
      </>
      <p className="error-message">
        {isSendError ? "Comment couldn't be posted. Please try again." : null}
      </p>
    </form>
  );
}
