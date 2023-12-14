import { useEffect, useState } from "react"
import { getTopics } from "../api"
import { Link } from "react-router-dom"

export default function TopicCard () {

    const [topics, setTopics] = useState([])
    useEffect(() => {
        getTopics()
        .then((res) => {
            setTopics(res)
        })
    }, [])

    return topics.map((topic) => {
        return <Link className="no-underline" to={`/${topic.slug}`}key={topic.slug}><li className="component stylised-box" key={topic.slug}>
        <h3>{topic.slug.toUpperCase()}:</h3>
            <h4>{topic.description}</h4>
        </li>
        </Link>
    })
}