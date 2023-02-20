import React from 'react'
import { Link } from 'react-router-dom'

const CartWidget = () => {
  return (
    <div>
      <Link to="/cart">
        <span>🛒</span>
        <span>3</span>
      </Link>
        
    </div>
  )
}

export default CartWidget