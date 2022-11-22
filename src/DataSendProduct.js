export const getProductsById = (categories, id) => {
  return categories.find((item) => item._id.toString() == id);
};
