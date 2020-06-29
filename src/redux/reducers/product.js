let intialSate = {
  products: [],
  productDetial: {},
};
const ProductReducer = (state = intialSate, action) => {
  switch (action.type) {
    case "FETCH_PRODUCT": {
      state.products = action.payload;
      return { ...state };
    }
    default:
      return state;
  }
};
export default ProductReducer;
