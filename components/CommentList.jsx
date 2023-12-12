import CommentCard from "./CommentCard";

export default function CommentList ({ article }) {
    
    return <ul className="component">
        <CommentCard article={article} />
    </ul>
}