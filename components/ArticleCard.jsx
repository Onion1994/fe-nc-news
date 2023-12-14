import { useEffect, useState } from "react"
import { getArticles } from "../api"
import { Link } from "react-router-dom"

export default function ArticleCard ({ topic, order, sortBy }) {
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    const [articles, setArticles] = useState([])
    useEffect(() => {
        setIsLoading(true)
        getArticles(topic, order, sortBy)
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
    }, [order, sortBy])

    function setData (res) {
        setArticles(res)
        setIsError(false)
        .catch(() => {
            setIsError(true)
        })
        .finally(() => {
            setIsLoading(false)
        })
    }

    if (isLoading) {
        return <p>Loading...</p>
    }

    if (isError) {
        return <p>Something went wrong</p>
    }

    return articles.map((article) => {
        return <Link className="no-underline" to={`/${article.topic}/${article.article_id}`}key={article.article_id}>
            <li className="component stylised-box" key={article.article_id}>
                <h3>{article.title}</h3>
                <img className="article-img" src={article.article_img_url}></img>
                </li></Link>
    })
}