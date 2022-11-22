export function checkInFav(fav, product) {
  return fav.find((c) => c._id === product._id);
}
