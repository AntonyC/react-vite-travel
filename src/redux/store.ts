import languageReducer from './language/languageReducer';
import { actionLog } from './middlewares/actionLog';
import { productDetailSlice } from './productDetail/slice';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
	language: languageReducer,
	productDetail: productDetailSlice.reducer,
});

// const store = createStore(rootReducer, applyMiddleware(thunk, actionLog));
const store = configureStore({
	reducer: rootReducer,
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(actionLog),
	devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
