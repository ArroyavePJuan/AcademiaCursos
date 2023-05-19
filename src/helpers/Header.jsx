import { Link } from "react-router-dom"
import logo from "../img/logo.jpg"

const Header = () => {
  return (
    <header>
        <nav>
            <img src={logo} className="logo" />
            <ul>
                <Link to={'/'}>Inicio</Link>
                <Link to={'/cursos'}>Cursos</Link>
            </ul>
        </nav>
    </header>
  )
}

export default Header
