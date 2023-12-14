import ArticleCard from "./ArticleCard";

export default function ArticleList ({ topic }) {
    return <ul className="component">
        <ArticleCard topic={topic}/>
    </ul>
}