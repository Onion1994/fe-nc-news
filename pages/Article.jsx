import { Navigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getArticle } from '../api'
import CommentList from '../components/CommentList'
import ArticleVotes from '../components/ArticleVotes'

export default function Article () {
    const [currentArticle, setCurrentArticle] = useState(null)
    const [isError, setIsError] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [errorMessage, setErrorMessage] = useState(null)
    const  { article } = useParams()
    const { topic } = useParams()

    const [currentComments, setCurrentComments] = useState([])


    useEffect(() => {
        getArticle(article)
        .then((res) => {
            if (typeof res === 'string') {
                setErrorMessage(res)
            }
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
        return <div className='spinner'></div>
    }

    if (isError) {
        return <p>Something went wrong</p>
    }

    if (topic !== currentArticle.topic && !errorMessage) {
        return <Navigate to={"/error"} />
    }

    if (errorMessage) {
        return <Navigate to={"/error"} state={{ errorMessage: errorMessage }} />;
    }    

    return <main>
        <article>
        <h2>{currentArticle.title}</h2>
        <h3>by {currentArticle.author}</h3>
        <img src={currentArticle.article_img_url} alt="stock photo image thumbnail for the article" className='article-img'></img>
        <p>{currentArticle.body}</p>
        <p className='date'>{currentArticle.created_at.slice(0, 10)} - {currentArticle.created_at.slice(12, 16)}</p>
        <ArticleVotes currentArticle={currentArticle}/>
        </article>
        <CommentList currentComments={currentComments} article={article} setCurrentComments={setCurrentComments}/>
        </main>
}