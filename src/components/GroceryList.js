import React from 'react'
import PropTypes from 'prop-types'
import Grocery from './Grocery'

const GroceryList = ({groceries, onGroceryClick}) => (
  <ul>
    {groceries.map(grocery =>
      <Grocery
        key={grocery.id}
        {...grocery}
        onClick={() => onGroceryClick(grocery.id)}
      />
    )}
  </ul>
)

GroceryList.propTypes = {
  groceries: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    addedToCart: PropTypes.bool.isRequired,
    itemName: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onGroceryClick: PropTypes.func.isRequired
}

export default GroceryList