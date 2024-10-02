import { Link } from "react-router-dom";
import img from "../img/Netflix_Logo.png";
import { ImSearch } from "react-icons/im";
const NavBar = () => {
  return (
    <>
      <nav className="header">
        <img src={img} alt="" />
        <div>
          <Link to="/">TV Shows</Link>
          <Link to="/">Movies</Link>
          <Link to="/">My List</Link>
          <Link to="/">Recently Added</Link>
        </div>
        <ImSearch />
      </nav>
    </>
  );
};

export default NavBar;
