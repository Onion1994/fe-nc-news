export default function CommentCard ({ currentComments }) {

    return <ul className="component"><h2>Comments</h2>
    {currentComments.map((comment) => {
        return <li className="component stylised-box" key={comment.comment_id}>
            <h3>{comment.author}</h3>
            <p>{comment.body}</p>
            <p>{comment.created_at.slice(0, 10)} - {comment.created_at.slice(12, 16)}</p>
            <p>votes: {comment.votes}</p>
        </li>
    })}
</ul>
}