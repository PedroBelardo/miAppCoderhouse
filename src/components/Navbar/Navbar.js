
import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import Logo from '../Logo/Logo'
import { NavLink  } from "react-router-dom"


const Navbar = () => {
    return (

        <nav className="NavBar">
                    <Logo />
            <div className="NavList" >
                <NavLink  to={`/category/Remeras`}  className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Remeras</NavLink >
                <NavLink  to={`/category/Gorras`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Gorras</NavLink >
                <NavLink  to={`/category/Accesorios`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Accesorios</NavLink >
                <NavLink  to={`/category/Juego`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>De juego</NavLink >
            </div>
            <CartWidget />
        </nav>

    )
}

export default Navbar