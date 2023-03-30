import createSagaMiddleware from "redux-saga";
import { applyMiddleware, compose } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer, { whitelisted } from "./redux/reducers";
import rootSaga from "./redux/sagas";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

//WHITELISTED MODULES

//REDUX PERSIST
const persistConfig = {
  key: "root",
  storage,
  whitelist: [...whitelisted],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

//CREATING SAGA
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const devMode = process.env.NODE_ENV === "development";

/*export const store = createStore(
  persistedReducer,
  composeEnhancers(
  applyMiddleware(sagaMiddleware),
  )
);*/

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

/*export default (preloadedState = persistedReducer()) => {
  const store = configureStore({
    reducer: persistedReducer,
    devTools: devMode,
    middleware: composeEnhancers(applyMiddleware(sagaMiddleware)),
    preloadedState,
  });
  sagaMiddleware.run(rootSaga);
  return store;
};*/

//CREATING SAGA ENDS HERE

export const persistor = persistStore(store);
