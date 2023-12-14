import ArticleCard from "./ArticleCard";

export default function ArticleList ({ topic }) {
    return <div class="component">
        <div class="dropdown-container">
        <h3>Order</h3>
        <select id="order">
  <option value="descending">Descending</option>
  <option value="ascending">Ascending</option>
</select>
<h3>Sort by</h3>
<select id="sort-by">
  <option value="date">Date</option>
  <option value="comment-count">Comment count</option>
  <option value="votes">votes</option>
</select>
</div>
    <ul className="component">
        <ArticleCard topic={topic}/>
    </ul>
    </div>
}