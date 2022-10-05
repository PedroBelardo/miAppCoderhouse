
import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import Logo from '../Logo/Logo'
import { Link } from "react-router-dom"

const Navbar = () => {
    return (

        <nav style={{backgroundColor: 'grey' , display: 'flex', justifyContent:'space-around', paddingTop:'40px', paddingBottom:'40px'}}>
            <div>
              <Logo />
            </div>
            <div>
                <Link to={`/category/remera`}>Remeras</Link>
                <Link to={`/category/gorra`}>Gorras</Link>
                <Link to={`/category/accesorio`}>Accesorios</Link>
                <Link to={`/category/deJuego`}>De juego</Link>
            </div>
            <div>
            <CartWidget />
            </div>
        </nav>

    )
}

export default Navbar