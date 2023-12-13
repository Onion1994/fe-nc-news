import { getComments } from "../api";
import CommentAdder from "./CommentAdder";
import CommentCard from "./CommentCard";
import { useEffect } from "react";

export default function CommentList ({ article, currentComments, setCurrentComments }) {

    useEffect(() => {
        getComments(article)
        .then((res) => {
            setCurrentComments(res)
        })
    }, [article])

    
    return <section>
        <CommentAdder article={article} setCurrentComments={setCurrentComments} currentComments={currentComments}/>
    <ul className="component">
        <CommentCard article={article} currentComments={currentComments} />
    </ul>
    </section>
}