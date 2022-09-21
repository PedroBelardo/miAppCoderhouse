
import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import Logo from '../Logo/Logo'

const Navbar = () => {
    return (

        <nav style={{display: 'flex', justifyContent:'space-around', marginTop:'40px'}}>
            <div>
              <Logo />
            </div>
            <div>
                <button>Remeras</button>
                <button>Gorras</button>
                <button>Accesorios</button>
                <button>De juego</button>gi
            </div>
            <div>
            <CartWidget />
            </div>
        </nav>

    )
}

export default Navbar