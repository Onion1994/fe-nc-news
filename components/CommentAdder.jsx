import { useState, } from "react"
import { postComment } from "../api"

export default function CommentAdder ({ article, setCurrentComments, currentComments }) {

    const [newComment, setNewComment] =  useState("")
    const [user, setUser] = useState("")
    const [isSendError, setIsSendError] = useState(false)

    const handleSubmit = (event, user, newComment, article) => {
        event.preventDefault()
        const requestObject = {
            username: user,
            body: newComment
            }
        postComment(article, requestObject)
        .then((res) => {
          setNewComment("")
          setUser("")
          const newCommentList = [res, ...currentComments]
          setCurrentComments(newCommentList)
          setIsSendError(false)
        })
        .catch(() =>{
          setIsSendError(true)
        })
    }

    return <form onSubmit={(event) => {handleSubmit(event, user, newComment, article)}} className="form-container component">
        <label htmlFor="add-comment">Add comment</label>
        <textarea placeholder="Type comment here..." rows="4" id="add-comment" required value={newComment}
          onChange={(event) => setNewComment(event.target.value)}></textarea>
            <label htmlFor="add-user">Username</label>
            <input type="text" placeholder="Type username here..." id="add-user" required value={user}
          onChange={(event) => setUser(event.target.value)} ></input>
            <button type="submit" className="button blue-button">Send!</button>
            <p className="error-message">{isSendError ? "Comment couldn't be posted. Please try again." : null}</p>
        </form>
}