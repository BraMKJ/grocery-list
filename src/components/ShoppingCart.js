import React from 'react'
import PropTypes from 'prop-types'
import Grocery from './Grocery'

const ShoppingCart = ({groceries, onGroceryClick}) => (
  <ul>
    {groceries.map(grocery =>
      <Grocery
        key={grocery.id}
        {...grocery}
        onClick={() => onGroceryClick(grocery.id, grocery.addedToCart)}
      />
    )}
  </ul>
)

ShoppingCart.propTypes = {
  groceries: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    addedToCart: PropTypes.bool.isRequired,
    itemName: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onGroceryClick: PropTypes.func.isRequired
}

export default ShoppingCart