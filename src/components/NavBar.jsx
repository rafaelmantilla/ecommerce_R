import React from 'react'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
      <div>
           <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
        <Link to ={"/"}> 
          <a className="navbar-brand"> <img src="/LogoNegro.png" alt="logo Avak"/></a>
        </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to ={"/"}>
                <p className="nav-link active" aria-current="page">Inicio</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to ={"/catalogo"}>
                <p className="nav-link">Comprá tu auto</p>
                </Link>
              </li>
              <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Busqueda
          </a>
          <ul className="dropdown-menu">
            <li>
              <Link to= {`/category/${"Auto"}`}>
              <a className="dropdown-item" >Autos</a>
              </Link>
            </li>
            <li>
            <Link to= {`/category/${"Camioneta"}`}>
              <a className="dropdown-item" >Camionetas</a>
            </Link>
              </li>
          </ul>
        </li>
              <div>
              <Link to={"/Cart"}>
                 <CartWidget/>
              </Link>
              </div>             
            </ul>
          </div>
          </div>
          </nav>
        </div>
  )
}

export default NavBar