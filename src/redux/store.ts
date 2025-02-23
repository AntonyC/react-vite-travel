import languageReducer from './language/languageReducer';
import { actionLog } from './middlewares/actionLog';
import { productDetailSlice } from './productDetail/slice';
import { productSearchSlice } from './productSearch/slice';
import { userSlice } from './user/slice';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['user'],
};

const rootReducer = combineReducers({
	language: languageReducer,
	productDetail: productDetailSlice.reducer,
	productSearch: productSearchSlice.reducer,
	user: userSlice.reducer,
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
