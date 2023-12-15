import { useContext, useState } from "react"
import { deleteComment } from "../api"
import { UserContext } from "../contexts/UserContext"

export default function CommentCard ({ currentComments, setCurrentComments }) {

    const { user } = useContext(UserContext)
    const [isDeleteError, setIsDeleteError] = useState(false)
    const [commentToDelete, setCommentToDelete] = useState(null)

    const handleDelete = (commentToDelete) => {
        deleteComment(commentToDelete)
        .then(() => {const commentList = [...currentComments]
            const updatedCommentList = commentList.filter((comment) => comment.comment_id !== commentToDelete)
            setCurrentComments(updatedCommentList)})
        .catch(() => {
            setIsDeleteError(true);
          })
    }

    return <ul><h2>Comments</h2>
    {currentComments.map((comment) => {
        if (comment.comment_id === commentToDelete && !isDeleteError) {
            return <li className="stylised-box" key={comment.comment_id}>
            <p>Deleting comment...</p>
            <h3>{comment.author}</h3>
            <p>{comment.body}</p>
            <p className="date">{comment.created_at.slice(0, 10)} - {comment.created_at.slice(12, 16)}</p>
            <p className="votes">votes: {comment.votes}</p>
        </li>
        } else if (comment.comment_id === commentToDelete && isDeleteError) {
        return <li className="stylised-box" key={comment.comment_id}>
        <button disabled={isDeleteError} className="button" onClick={() => {setCommentToDelete(comment.comment_id); handleDelete(comment.comment_id)}}>Delete comment</button>
        <p className="error-message">Comment could not be deleted. Please refresh the page and try again.</p>
        <h3>{comment.author}</h3>
        <p>{comment.body}</p>
        <p className="date">{comment.created_at.slice(0, 10)} - {comment.created_at.slice(12, 16)}</p>
        <p className="votes">votes: {comment.votes}</p>
    </li>
            }
        else {
        return <li className="stylised-box" key={comment.comment_id}>
            <>{comment.author === user ? <button disabled={isDeleteError} className="button" onClick={() => {setCommentToDelete(comment.comment_id); handleDelete(comment.comment_id)}}>Delete comment</button > : null}</>
            <h3>{comment.author}</h3>
            <p>{comment.body}</p>
            <p className="date">{comment.created_at.slice(0, 10)} - {comment.created_at.slice(12, 16)}</p>
            <p className="votes">votes: {comment.votes}</p>
        </li>
    }})}
</ul>
}