import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice";
import productReducer from "./ProductSlice";
import TestReducer from "./TestSlice";
import storage from "redux-persist/lib/storage";
import storageSession from "redux-persist/lib/storage/session";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";


// if multiple reducers then we can also passas combine reducer in configure store
const rootReducer = combineReducers({
  cart: cartReducer,
  products: productReducer,
  test: TestReducer,
});

const persistConfig = {
  key: "root",
  // storage //to use localstorage for persisting
  storage: storageSession, //to use sessionstorage for persisting
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = configureStore({
//     reducer:rootReducer
//     // reducer:{
//     //     cart:cartReducer,
//     //     products:productReducer
//     // }
// });

// with persist
const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});
// Thunk middleware, which will intercept and stop non-serializable values in action before they get to the reducer.
// When using Redux Persist without using the Thunk middleware, we‘d get an error in the browser’s console reading a non-serializable value was detected in the state.

export const persistor = persistStore(store);

export default store;

