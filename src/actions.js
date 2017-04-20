/* action types */

export const TOGGLE_GROCERY = 'TOGGLE_GROCERY'

/* action creators */

export function toggleGrocery(id) {
  return {
    type: TOGGLE_GROCERY,
    id
  }
}