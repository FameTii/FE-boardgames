import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="headerBox">
      <Link to={"/"}>
        <h1>Boardgame Reviews</h1>
      </Link>
    </div>
  );
};

export default Header;
