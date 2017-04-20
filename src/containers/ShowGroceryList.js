import { connect } from 'react-redux'
import { toggleGrocery } from '../actions'
import GroceryList from '../components/GroceryList'

const getGroceries = (groceries) => {
  return groceries.filter((grocery) => !grocery.addedToCart)
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

const ShowGroceryList = connect(
  mapStateToProps,
  mapDispatchToProps
)(GroceryList)

export default ShowGroceryList