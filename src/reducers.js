import { ADD_GROCERY_ITEM } from './actions'
import { combineReducers } from 'redux'

function groceries(state = [], action) {
  switch (action.type) {
    case ADD_GROCERY_ITEM:
      return [
        ...state,
        {
          id: action.id,
          name: action.itemName,
          addedToCart: false
        }
      ]
    default:
      return state
  }
}

const groceryApp = combineReducers({
  groceries
})

export default groceryApp