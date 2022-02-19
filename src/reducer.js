export const initialState = {
  basket: [
    {
      id: "12356489",
      title: "Boat Rockerz 255 Pro",
      price: 1399,
      rating: 5,
      image:
        "https://images-eu.ssl-images-amazon.com/images/I/31PU4kWou+L._AC_SX184_.jpg",
    },
  ],
  user: null,
};
export const getBasketTotal = (basket) =>{
    basket?.reduce((amount,item) => item.price + amount,0);
}


const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    //   break;
    case "REMOVE_FROM_BASKET":
      let newBasket = [...state.basket];
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      if (index >= 0) {
        // item exist in present basket
        newBasket.splice(index, 1);
      } else {
        console.warn("Can't remove the item");
      }
      return { ...state, basket: newBasket };
    //   break;
    default:
      return state;
  }
};

export default reducer;
