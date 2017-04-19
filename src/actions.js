export const ADD_GROCERY_ITEM = 'ADD_GROCERY_ITEM'

/* action creators */
let nextItemId = 0

export function addGroceryItem(itemName) {
  return {
    id: nextItemId++,
    type: ADD_GROCERY_ITEM,
    itemName
  }
}