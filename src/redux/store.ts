import languageReducer, { LanguageState } from './language/languageReducer';
import { actionLog } from './middlewares/actionLog';
import { productDetailSlice } from './productDetail/slice';
import { combineReducers, configureStore, Reducer } from '@reduxjs/toolkit';
import { productSearchSlice } from './productSearch/slice';
import { userSlice } from './user/slice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { shoppingCartSlice } from './shoppingCart/slice';
import { orderSlice } from './order/slice';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['user'],
};

const rootReducer = combineReducers({
	language: languageReducer as unknown as Reducer<LanguageState>,
	productDetail: productDetailSlice.reducer,
	productSearch: productSearchSlice.reducer,
	user: userSlice.reducer,
	shoppingCart: shoppingCartSlice.reducer,
	order: orderSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = createStore(rootReducer, applyMiddleware(thunk, actionLog));
const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(actionLog),
	devTools: true,
});

const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default { store, persistor };
