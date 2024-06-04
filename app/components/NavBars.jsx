import '../css/NavBar.css'
import '../css/TopNavBar.css'
import { Link } from '@remix-run/react';


export const TopNavBar = () => {
  return (
    <div className='top-nav-bar'>
      <div>
        bateria regargable
      </div>
      <div>
        libre de emision
      </div>
      <div>
        envios gratis
      </div>
    </div>
  )
}

export const NavBar = () => {
  return (
    <div className='nav-bar'>

      <div className='navbar-menu'>
        <div>Acerca</div>
        <div>Calculador</div>
        <div>Productos</div>
        <div>Contacto</div>
      </div>
      <flex className='navbar-lang'>
        <div className="bordered">ES</div>
        <div>EN</div>
      </flex>
    </div>
  )
}