import { connect } from 'react-redux'
import { toggleGrocery } from '../actions'
import ShoppingCart from '../components/ShoppingCart'

const getGroceries = (groceries) => {
  return groceries.filter((grocery) => grocery.addedToCart)
}

const mapStateToProps = (state) => {
  return {
    groceries: getGroceries(state.groceries)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onGroceryClick: (id, addedToCart) => {
      console.log(id, addedToCart)
      dispatch(toggleGrocery(id))
    }
  }
}

const ShowShoppingCart = connect(
  mapStateToProps,
  mapDispatchToProps)(ShoppingCart)

export default ShowShoppingCart