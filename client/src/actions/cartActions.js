export const addToCart = (pizza, quantity, varient) => (dispatch, getState) => {
  var cartItem = {
    name: pizza.name,
    _id: pizza._id,
    image: pizza.image,
    varient: varient,
    quantity: Number(quantity),
    prices: pizza.prices,
    price: pizza.prices[0][varient] * quantity,
  };
  dispatch({ type: "ADD_TO_CART", payload: cartItem });
  const cartItems = getState().cartReducer.cartItems;
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};
export const removeFromCart = (pizza) => (dispatch, getState) => {
  dispatch({ type: "DELETE_FROM_CART", payload: pizza });
  const cartItem = getState().cartReducer.cartItems;
  localStorage.setItem("cartItems", JSON.stringify(cartItem));
};
