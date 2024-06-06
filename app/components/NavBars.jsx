import '../css/NavBar.css'
import '../css/TopNavBar.css'
import { NavLink } from '@remix-run/react';

export const LinksTo = () => {
  {/* <NavLink to="/" activeClassName="active-link">Acerca</NavLink> */ }

  return (
    <div className='links-to'>
      <NavLink to="/">Acerca</NavLink>
      <NavLink to="/calculadora">Calculadora</NavLink>
      <NavLink to="/productos">Productos</NavLink>
      <NavLink to="/contacto">Contacto</NavLink>
    </div>
  )
}

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
        <LinksTo />
      </div>
      <flex className='navbar-lang'>
        <div className="bordered">ES</div>
        <div>EN</div>
      </flex>
    </div>
  )
}