import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';
import { searchMockData } from './mockup';

interface ProductSearchState {
	loading: boolean;
	error: string | null;
	data: any;
	pagination: any;
}

const initialState: ProductSearchState = {
	loading: true,
	error: null,
	data: null,
	pagination: null,
};

export const searchProduct = createAsyncThunk(
	'productSearch/searchProduct',
	// async (
	//   paramaters: {
	//     keywords: string;
	//     nextPage: number | string;
	//     pageSize: number | string;
	//   },
	//   thunkAPI
	// ) => {
	//   let url = `http://123.56.149.216:8080/api/touristRoutes?pageNumber=${paramaters.nextPage}&pageSize=${paramaters.pageSize}`;
	//   if (paramaters.keywords) {
	//     url += `&keyword=${paramaters.keywords}`;
	//   }
	//   const response = await axios.get(url);
	//   return {
	//     data: response.data,
	//     pagination: JSON.parse(response.headers["x-pagination"]),
	//   };
	// }
	async (paramaters: {
		keywords: string;
		nextPage: number | string;
		pageSize: number | string;
	}) => {
		const data = await new Promise(resolve => {
			searchMockData.data[0].description = `${searchMockData.data[0].title}-${paramaters.keywords}`;
			setTimeout(() => {
				resolve({
					data: searchMockData.data,
					pagination: searchMockData.pagination,
					totalCount: searchMockData.pagination.totalCount,
				});
			}, 1000); // 延迟 1 秒
		});

		return data;
	}
);

export const productSearchSlice = createSlice({
	name: 'productSearch',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(searchProduct.pending, state => {
				state.loading = true;
			})
			.addCase(searchProduct.fulfilled, (state, action) => {
				const payload = action.payload as ProductSearchState;
				state.data = payload.data;
				state.pagination = payload.pagination;
				state.loading = false;
				state.error = null;
			})
			.addCase(searchProduct.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload as string | null;
			});
	},
});
