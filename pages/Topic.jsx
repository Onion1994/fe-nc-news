import { useParams } from "react-router"
import ArticleList from "../components/ArticleList"

export default function Topic () {

    let { topic } = useParams()
    

    return <>
    <h2>{topic.toUpperCase()}</h2>
    <ArticleList topic={topic}/>
    </>
}