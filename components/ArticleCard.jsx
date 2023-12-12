import { useEffect, useState } from "react"
import { getArticles } from "../api"
import { Link } from "react-router-dom"

export default function ArticleCard () {
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    const [articles, setArticles] = useState([])
    useEffect(() => {
        getArticles()
        .then((res) => {
            setArticles(res)
            setIsError(false)
        })
        .catch(() => {
            setIsError(true)
        })
        .finally(() => {
            setIsLoading(false)
        })
    }, [])

    if (isLoading) {
        return <p>Loading...</p>
    }

    if (isError) {
        return <p>Something went wrong</p>
    }

    return articles.map((article) => {
        return <Link to={`/${article.topic}/${article.article_id}`}key={article.article_id}><li className="component list" key={article.article_id}><h2>{article.title}</h2><img className="article-img" src={article.article_img_url}></img></li></Link>
    })
}