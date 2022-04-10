import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import {
  passwordReducer,
  appReducer,
  packsReducer,
  loginReducer,
  profileReducer,
  registrationReducer,
  cardsReducer,
} from 'store/reducers';

const rootReducer = combineReducers({
  app: appReducer,
  login: loginReducer,
  registration: registrationReducer,
  profile: profileReducer,
  packs: packsReducer,
  cards: cardsReducer,
  password: passwordReducer,
});

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk), composeEnhancers()),
);

export type RootReducerType = ReturnType<typeof rootReducer>;
