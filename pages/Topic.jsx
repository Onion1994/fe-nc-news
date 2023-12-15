import { Navigate, useParams } from "react-router"
import ArticleList from "../components/ArticleList"
import { useEffect, useState } from "react"
import { getTopics } from "../api"

export default function Topic () {
    const [isError, setIsError] = useState(false)
    const [shouldLoadArticles, setShouldLoadArticles] = useState(false)
    const [topics, setTopics] = useState([])
    let { topic } = useParams()

    useEffect(() => {
        getTopics()
            .then((responses) => {
                setTopics(responses)
                const exists = responses.some((response) => response.slug === topic)
                setIsError(!exists)
                setShouldLoadArticles(exists)
            })
    }, [topic]);

    if (isError) {
        return <Navigate to="/error" />
    }

    return (
        <section>
            <h2>{shouldLoadArticles && topic.toUpperCase()}</h2>
            {shouldLoadArticles && <ArticleList topic={topic} topics={topics} />}
        </section>
    );
}