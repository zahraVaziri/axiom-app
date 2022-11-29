import _ from "lodash";
const addProductToFav = (state, payload) => {
  const updatedFav = [...state.fav];
  const updatedItemIndex = updatedFav.findIndex(
    (item) => item._id === payload._id
  );

  if (updatedItemIndex < 0) {
    updatedFav.push({ ...payload, quantity: 1 });
  } else {
    const updatedItem = { ...updatedFav[updatedItemIndex] };
    updatedItem.quantity++;
    updatedFav[updatedItemIndex] = updatedItem;
  }
  return {
    ...state,
    fav: updatedFav,
    total: state.total + payload.offPrice,
  };

};

const deleteProductFav = (state, payload) => {
  const updatedFav = [...state.fav];
  const filterdProducts = updatedFav.filter(
    (item) => item._id !== payload._id
  );
  return {
    ...state,
    fav: filterdProducts,
  };
  
};

const favReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORAT":
      return addProductToFav(state, action.payload);
    case "REMEVE_TO_FAVORAT":
      return deleteProductFav(state, action.payload);
    default:
      return state;
  };
}
export default favReducer;
