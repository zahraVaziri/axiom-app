import React, { createContext, useContext, useReducer } from "react";

var LayoutStateContext = createContext();
var LayoutDispatchContext = createContext();

function LayoutReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_DRAWER":
      return { ...state, drawerOpen: !state.drawerOpen };

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function LayoutProvider({ children }) {
  var [state, dispatch] = useReducer(LayoutReducer, {
    drawerOpen: false
  });
  return (
    <LayoutStateContext.Provider value={state}>
      <LayoutDispatchContext.Provider value={dispatch}>
        {children}
      </LayoutDispatchContext.Provider>
    </LayoutStateContext.Provider>
  );
}

function useLayoutState() {
  var context = useContext(LayoutStateContext);
  if (context === undefined) {
    throw new Error("useTweetState must be used within a TweetProvider");
  }
  return context;
}

function useLayoutDispatch() {
  var context = React.useContext(LayoutDispatchContext);
  if (context === undefined) {
    throw new Error("useTweetDispatch must be used within a TweetProvider");
  }
  return context;
}

export { LayoutProvider, useLayoutState, useLayoutDispatch, toggleDrawer };

// ###########################################################
function toggleDrawer(dispatch) {
  dispatch({
    type: "TOGGLE_DRAWER",

  });
}

