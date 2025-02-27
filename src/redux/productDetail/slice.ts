import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { productMockData } from './mockup';

interface ProductDetailState {
	loading: boolean;
	error: string | null;
	data: any;
}

const initialState: ProductDetailState = {
	loading: true,
	error: null,
	data: null,
};

export const getProductDetail = createAsyncThunk(
	'productDetail/getProductDetail',
	// async (touristRouteId: string, thunkAPI) => {
	//   const { data } = await axios.get(
	//     `http://localhost:8080/api/touristRoutes/${touristRouteId}`
	//   );
	//   return data;
	// }
	async (touristRouteId: string) => {
		const data = await new Promise(resolve => {
			setTimeout(() => {
				productMockData.description = `${productMockData.description}-${touristRouteId}`;
				resolve(productMockData);
			}, 1000);
		});

		return data;
	}
);

export const productDetailSlice = createSlice({
	name: 'productDetail',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(getProductDetail.pending, state => {
				state.loading = true;
			})
			.addCase(getProductDetail.fulfilled, (state, action) => {
				state.data = action.payload;
				state.loading = false;
				state.error = null;
			})
			.addCase(getProductDetail.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload as string | null;
			});
	},
});
