import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getArticle, getComments } from '../api'
import CommentList from '../components/CommentList'

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
    }, [article])

    if (isLoading) {
        return <p>Loading...</p>
    }

    if (isError) {
        return <p>Something went wrong</p>
    }

    return <main className="component">
        <article>
        <h2>{currentArticle.title}</h2>
        <h3>by {currentArticle.author}</h3>
        <img src={currentArticle.article_img_url} alt="stock photo image thumbnail for the article" className='article-img'></img>
        <p>{currentArticle.body}</p>
        </article>
        <section>
        <CommentList article={article}/>
        </section>
        </main>
}