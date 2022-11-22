import { useContext, useReducer, createContext } from "react";
import favReducer from "./favReducer";
const FavContext = createContext();
const FavContextDispatcher = createContext();

const initialState = {
  fav: [],
  total: 0,
};



const FavProvider = ({ children }) => {
  const [fav, dispatch] = useReducer(favReducer, initialState);
   

  return (
    <FavContext.Provider value={fav}>
      <FavContextDispatcher.Provider value={dispatch}>
        {children}
      </FavContextDispatcher.Provider>
    </FavContext.Provider>
  );
};

export default FavProvider;

export const useFav = () => useContext(FavContext);
export const useFavActions = () => useContext(FavContextDispatcher);
