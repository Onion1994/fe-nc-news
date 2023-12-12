import { useParams } from 'react-router-dom'
import ArticleCard from '../components/ArticleCard'
import { useEffect, useState } from 'react'
import { getArticle } from '../api'

export default function Article () {
    const [currentArticle, setCurrentArticle] = useState(null)
    const [isError, setIsError] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    const  { article } = useParams()
    useEffect(() => {
        getArticle(article)
        .then((res) => {
            setCurrentArticle(res)
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

    return <article className="component">
        <h2>{currentArticle.title}</h2>
        <h3>by {currentArticle.author}</h3>
        <img src={currentArticle.article_img_url}></img>
        <p>{currentArticle.body}</p>
        <p>Votes: {currentArticle.votes}</p>
        </article>
}