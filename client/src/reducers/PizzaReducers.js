export const getAllPizzasReducer = (state = { pizzas: [] }, action) => {
  switch (action.type) {
    case "GET_PIZZAS_REQUEST":
      return {
        loading: true,
        ...state,
      };
    case "GET_PIZZAS_SUCCESS":
      return {
        loading: false,
        pizzas: action.payload,
      };
    case "GET_PIZZAS_FAILED":
      return {
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};
export const getPizzaByIdReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_PIZZABYID_REQUEST":
      return {
        loading: true,
        ...state,
      };
    case "GET_PIZZABYID_SUCCESS":
      return {
        loading: false,
        pizza: action.payload,
      };
    case "GET_PIZZABYID_FAILED":
      return {
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};
export const addPizzaReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_PIZZAS_REQUEST":
      return {
        loading: true,
        ...state,
      };
    case "ADD_PIZZAS_SUCCESS":
      return {
        loading: false,
        success: true,
      };
    case "ADD_PIZZAS_FAILED":
      return {
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};
export const updatedPizzaReducer = (state = {}, action) => {
  switch (action.type) {
    case "UPDATE_PIZZA_REQUEST":
      return {
        updatedloading: true,
        ...state,
      };
    case "UPDATE_PIZZAS_SUCCESS":
      return {
        updatedloading: false,
        updatedsuccess: true,
      };
    case "UPDATE_PIZZAS_FAILED":
      return {
        updatederror: action.payload,
        updatedloading: false,
      };

    default:
      return state;
  }
};
