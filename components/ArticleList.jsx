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

    return <div className="component">
        <div className="dropdown-container">
        <h3>Order</h3>
        <select value={order} onChange={handleOrder} id="order">
            <option value="desc">Descending</option>
            <option value="asc">Ascending</option>
            </select>
            <h3>Sort by</h3>
            <select value={sortBy} onChange={(handleSortBy)} id="sort-by">
                <option value="created_at">Date</option>
                <option value="comment_count">Comment count</option>
                <option value="votes">votes</option>
                </select>
        </div>
        <ul className="component">
        <ArticleCard topic={topic} order={order} sortBy={sortBy}/>
        </ul>
    </div>
}