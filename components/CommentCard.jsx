import { deleteComment } from "../api"

export default function CommentCard ({ currentComments, setCurrentComments }) {

    const handleDelete = (commentToDelete) => {
        const commentList = [...currentComments]
        const updatedCommentList = commentList.filter((comment) => comment.comment_id !== commentToDelete)
        setCurrentComments(updatedCommentList)
        deleteComment(commentToDelete)
    }

    return <ul className="component"><h2>Comments</h2>
    {currentComments.map((comment) => {
        return <li className="component stylised-box" key={comment.comment_id}>
            <>{comment.author === "tickle122" ? <button className="button" onClick={() => {handleDelete(comment.comment_id)}}>Delete comment</button> : null}</>
            <h3>{comment.author}</h3>
            <p>{comment.body}</p>
            <p>{comment.created_at.slice(0, 10)} - {comment.created_at.slice(12, 16)}</p>
            <p>votes: {comment.votes}</p>
        </li>
    })}
</ul>
}