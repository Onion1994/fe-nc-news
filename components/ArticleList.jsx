import { useState } from "react";
import ArticleCard from "./ArticleCard";

export default function ArticleList ({ topic }) {

    const [order, setOrder] = useState("desc")
    const [sortBy, setSortBy] = useState("created_at")

    function handleOrder (event) {
        setOrder(event.target.value)
    }

    function handleSortBy (event) {
        setSortBy(event.target.value)
    }

    return <div>
        <div className="dropdown-container">
        <h3>Order</h3>
        <select value={order} onChange={handleOrder} id="order">
            <option value="desc">Descending</option>
            <option value="asc">Ascending</option>
            </select>
            <h3>Sort by</h3>
            <select value={sortBy} onChange={(handleSortBy)} id="sort-by">
                <option value="created_at">Date</option>
                <option value="comment_count">Comments</option>
                <option value="votes">Votes</option>
                </select>
        </div>
        <ul>
        <ArticleCard topic={topic} order={order} sortBy={sortBy}/>
        </ul>
    </div>
}