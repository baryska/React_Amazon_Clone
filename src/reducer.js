export const intialState = {
  basket: [], 
  user: null
}

//Selector
export const getBasketTotal = (basket) => 
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    
      case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      //this is a copy of the basket array
      let newBasket =  [...state.basket];
      
      if (index >= 0) {
        //splice method cuts out 1 item with the index)
        newBasket.splice(index, 1);
        
      } else {
        console.warn('Cannot remove product')
      }
      return {
        ...state,
        basket: newBasket
      }

      case "SET_USER":
        return {
          ...state,
          user: action.user
        }

      default:
        return state;
  }
}

export default reducer;