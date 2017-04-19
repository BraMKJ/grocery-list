import React from 'react'
import PropTypes from 'prop-types'

const Grocery = ({ onClick, addedToCart, itemName }) => (
    <li onClick={onClick}>
      {itemName}
    </li>
)

Grocery.propTypes = {
  onClick: PropTypes.func.isRequired,
  addedToCart: PropTypes.bool.isRequired,
  itemName: PropTypes.string.isRequired
}

export default Grocery