import React from 'react'
import CartWidget from './CartWidget'

const NavBar = () => {
  return (
    <nav>
        <div>
            <ul>
                <li> <a href="#">AAAA</a></li>
                <li> <a href="#">BBBB</a></li>
                <li> <a href="#">CCCC</a></li>
                <li> <a href="#">DDDD</a></li>
            </ul>
        </div>
        <h1>Abecedario</h1>
        <div>
            <CartWidget/>
        </div>
    </nav>
  )
}

export default NavBar