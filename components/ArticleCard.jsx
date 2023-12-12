import { useEffect, useState } from "react"
import { getArticles } from "../api"

export default function ArticleCard () {
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    const [articles, setArticles] = useState([])
    useEffect(() => {
        getArticles()
        .then((res) => {
            setArticles(res)
            setIsLoading(false)
        })
        .catch(() => {
            setIsError(true)
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
        return <li className="component" key={article.article_id}><p>{article.title}</p><img className="article-img" src={article.article_img_url}></img></li>
    })
}