import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

export default function Nav() {
  const { user } = useContext(UserContext);

  return (
    <nav className="component">
      <Link to="/">
        <p>Home</p>
      </Link>
      <Link to="/topics">
        <p>Topics</p>
      </Link>
      <p>Logged as: {user}</p>
    </nav>
  );
}
