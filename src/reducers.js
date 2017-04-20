import { combineReducers } from 'redux'
import { TOGGLE_GROCERY } from './actions'

let allGroceries = [
  { id: 1, itemName: "Banaan", addedToCart: false },
  { id: 2, itemName: "Kratje bier", addedToCart: true },
  { id: 3, itemName: "Volkoren brood", addedToCart: false},
  { id: 4, itemName: "Koffie", addedToCart: false},
  { id: 5, itemName: "Melk", addedToCart: false},
  { id: 6, itemName: "Cola", addedToCart: false},
  { id: 7, itemName: "Appels", addedToCart: false},
  { id: 8, itemName: "Kaas", addedToCart: false}
]

function groceries(state = allGroceries, action) {
  switch (action.type) {
    case TOGGLE_GROCERY:
      return state.map((grocery) => {
        console.log(grocery)
        if (grocery.id === action.id) {
          return Object.assign({}, grocery, {
            addedToCart: !grocery.addedToCart
          })
        }
        return grocery
      })
    default:
      return state
  }
}

const groceryApp = combineReducers({
  groceries
})

export default groceryApp