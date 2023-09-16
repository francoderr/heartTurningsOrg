import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storageSession from "redux-persist/lib/storage/session";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import navColorsReducer from "../features/navColorsReducer";

const rootReducer = combineReducers({
  colors: navColorsReducer,
});


const reduxPersistConfig = {
  key: "root",
  storage: storageSession,
  blacklist: [],
};

const persistedRootReducer = persistReducer(reduxPersistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedRootReducer,
  middleware: [thunk],
});

export const persistedStore = persistStore(store);
