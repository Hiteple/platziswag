import React, { useContext } from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import { MenuItem, StyledHeader } from '../styles/components'
import { CartContext } from '../Context'

const Header = () => {
  const { cart } = useContext(CartContext)
  return (
    <StyledHeader>
      <Link to="/">
        <img
          src="https://i.postimg.cc/6q3pg48v/Logo.png"
          alt="Logo de Platziswag"
        />
      </Link>
      <nav>
        <ul>
          <MenuItem margin>
            <Link to="/">Products</Link>
          </MenuItem>
          <MenuItem margin>
            <a href="http://www.platzi.com">Platzi</a>
          </MenuItem>
          <MenuItem>
            <Link to="/cart">
              <span>
                <img src="https://i.postimg.cc/L6wpMxLt/cart.png" alt="cart" />
                {cart ? cart.length : null}
              </span>
            </Link>
          </MenuItem>
        </ul>
      </nav>
    </StyledHeader>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
