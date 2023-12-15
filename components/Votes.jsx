import { useState } from "react"
import { patchVotes } from "../api"

export default function Votes ({ currentArticle }) {
    
    const [votes, setVotes] = useState(currentArticle.votes)
    const [isFailedRequest, setIsFailedRequest] = useState(false)

    
    function handleVote (article, vote){
        let updatedVotes = votes

        if (vote > 0) {
            updatedVotes++
        } else {
            updatedVotes--
            }
        setVotes(updatedVotes)
        patchVotes(article, {inc_votes : vote})
        .catch(() => {
            setIsFailedRequest(true)
        })
    }


    return <div>
        <p className="votes">Votes: {votes}</p>
        <button className="button green-button" onClick={() => handleVote(currentArticle.article_id, 1)}>Upvote</button>
    <button className="button red-button" onClick={() => handleVote(currentArticle.article_id, -1)}>Downvote</button>
    <p className="error-message">{isFailedRequest ? "Vote registration failed. Please refresh and try again." : null}</p>
</div>
}