import logo from "../../assets/logo.png"
import "./NavBar.css"
import CardWidget from '../CartWidget/CartWidget'
import { Link } from "react-router-dom"
function NavBar() {
  return (
    <nav className="navbar">
        <div>
            <img className="logo" src={logo} alt="Logo comercio" />
        </div>
        <ul className="navbarLinks">
            <Link className="navbarItem" to="/">Home</Link>
            <Link className="navbarItem" to="/categoria/9FIFTY">9 Fifty</Link>
            <Link className="navbarItem" to="/categoria/59FIFTY">59 Fifty</Link>
            <Link className="navbarItem" to="/categoria/GOLFER">Golfer</Link>
        </ul>
        <Link to="/checkOut"><CardWidget/></Link>
    </nav>
)
}

export default NavBar