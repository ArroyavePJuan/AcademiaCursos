import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header>
        <nav>
            <img src="../img/logo.png" className="logo" />
            <ul>
                <Link to={'/'}>Inicio</Link>
                <Link to={'/cursos'}>Cursos</Link>
                <Link to={'/horarios'}>Horarios</Link>
            </ul>
        </nav>
    </header>
  )
}

export default Header
