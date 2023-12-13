import { Link } from "react-router-dom";

export default function Nav () {
    return <nav className="component">
        <Link to="/">
        <p>Home</p>
        </Link>
        <p>user: tickle122</p>
    </nav>
}