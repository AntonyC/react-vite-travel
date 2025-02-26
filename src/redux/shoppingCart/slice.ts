import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';
import { shoppingCartItems, checkoutMockData } from './mockup';

interface ShoppingCarttate {
	loading: boolean;
	error: string | null;
	items: any[];
}

const initialState: ShoppingCarttate = {
	loading: true,
	error: null,
	items: [],
};

export const getShoppingCart = createAsyncThunk(
	'shoppingCart/getShoppingCart',
	// async (jwt: string, thunkAPI) => {
	//   const { data } = await axios.get(
	//     `http://localhost:8080/api/shoppingCart`,
	//     {
	//       headers: {
	//         Authorization: `bearer ${jwt}`,
	//       },
	//     }
	//   );
	//   return data.shoppingCartItems;
	// }
	async (jwt: string, thunkAPI) => {
		const data = await new Promise(resolve => {
			setTimeout(() => {
				resolve(shoppingCartItems);
			}, 1000);
		});
		return data;
	}
);

export const addShoppingCartItem = createAsyncThunk(
	'shoppingCart/addShoppingCartItem',
	// async (parameters: { jwt: string; touristRouteId: string }, thunkAPI) => {
	//   const { data } = await axios.post(
	//     `http://localhost:8080/api/shoppingCart/items`,
	//     {
	//       touristRouteId: parameters.touristRouteId,
	//     },
	//     {
	//       headers: {
	//         Authorization: `bearer ${parameters.jwt}`,
	//       },
	//     }
	//   );
	//   return data.shoppingCartItems;
	// }
	async (parameters: { jwt: string; touristRouteId: string }, thunkAPI) => {
		const data = await new Promise(resolve => {
			setTimeout(() => {
				resolve([]);
			}, 1000); // Delay 1 second
		});

		return data;
	}
);

export const checkout = createAsyncThunk(
	'shoppingCart/checkout',
	async (jwt: string, thunkAPI) => {
		// const { data } = await axios.post(
		//   `http://localhost:8080/api/shoppingCart/checkout`,
		//   null,
		//   {
		//     headers: {
		//       Authorization: `bearer ${jwt}`,
		//     },
		//   }
		// );
		// checkoutMockData.state = "Completed";
		return checkoutMockData;
	}
);

export const clearShoppingCartItem = createAsyncThunk(
	'shoppingCart/clearShoppingCartItem',
	// async (parameters: { jwt: string; itemIds: number[] }, thunkAPI) => {
	//   return await axios.delete(
	//     `http://123.56.149.216:8080/api/shoppingCart/items/(${parameters.itemIds.join(
	//       ","
	//     )})`,
	//     {
	//       headers: {
	//         Authorization: `bearer ${parameters.jwt}`,
	//       },
	//     }
	//   );
	// }
	async (parameters: { jwt: string; itemIds: number[] }, thunkAPI) => {
		const data = await new Promise(resolve => {
			setTimeout(() => {
				resolve([]);
			}, 1000);
		});
		return data;
	}
);

export const shoppingCartSlice = createSlice({
	name: 'shoppingCart',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(getShoppingCart.pending, state => {
				state.loading = true;
			})
			.addCase(getShoppingCart.fulfilled, (state, action) => {
				state.items = action.payload as any[];
				state.loading = false;
				state.error = null;
			})
			.addCase(getShoppingCart.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload as string | null;
			})

			.addCase(addShoppingCartItem.pending, state => {
				state.loading = true;
			})
			.addCase(addShoppingCartItem.fulfilled, (state, action) => {
				state.items = action.payload as any[];
				state.loading = false;
				state.error = null;
			})
			.addCase(addShoppingCartItem.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload as string | null;
			})

			.addCase(clearShoppingCartItem.pending, state => {
				state.loading = true;
			})
			.addCase(clearShoppingCartItem.fulfilled, (state, action) => {
				state.items = [];
				state.loading = false;
				state.error = null;
			})
			.addCase(clearShoppingCartItem.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload as string | null;
			})

			.addCase(checkout.pending, state => {
				state.loading = true;
			})
			.addCase(checkout.fulfilled, (state, action) => {
				state.items = [];
				state.loading = false;
				state.error = null;
			})
			.addCase(checkout.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload as string | null;
			});
	},
});
