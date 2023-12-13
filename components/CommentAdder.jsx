import { useContext, useState } from "react";
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

  return (
    <form
      onSubmit={(event) => {
        handleSubmit(event, user, newComment, article);
      }}
      className="form-container component"
    >
      <label htmlFor="add-comment">Add comment</label>
      <textarea
        placeholder="Type comment here..."
        rows="4"
        id="add-comment"
        required
        value={newComment}
        onChange={(event) => setNewComment(event.target.value)}
      ></textarea>
      <>
        {isLoading ? (
          <p>Posting comment...</p>
        ) : (
          <button type="submit" className="button blue-button">
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
