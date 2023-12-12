import { useEffect, useState } from "react"
import { getArticles } from "../api"

export default function ArticleCard () {
    const [isLoading, setIsLoading] = useState(true)
    const [articles, setArticles] = useState([])
    useEffect(() => {
        getArticles()
        .then((res) => {
            setArticles(res)
            setIsLoading(false)
        })
    }, [])

    if (isLoading) {
        return <p>Loading...</p>
    }

    return articles.map((article) => {
        return <li className="component" key={article.article_id}><p>{article.title}</p><img className="article-img" src={article.article_img_url}></img></li>
    })
}