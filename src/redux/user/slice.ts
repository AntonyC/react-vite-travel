import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { tokenMockData } from './mockup';

interface UserState {
	loading: boolean;
	error: string | null;
	token: string | null;
}

const initialState: UserState = {
	loading: false,
	error: null,
	token: null,
};

export const signIn = createAsyncThunk(
	'user/signIn',
	// async (paramaters: {
	//     email: string,
	//     password: string,
	// }, thunkAPI) => {
	//   const { data } = await axios.post(
	//     `http://localhost:8080/auth/login`,{
	//         email: paramaters.email,
	//         password: paramaters.password
	//     }
	//   );
	//   return data.token;
	// }

	async (paramaters: { email: string; password: string }) => {
		const data = await new Promise(resolve => {
			setTimeout(() => {
				console.log(
					'user/signIn: email: ',
					paramaters.email,
					', password:',
					paramaters.password
				);
				resolve(tokenMockData.token);
			}, 1000); // Delay 1 second
		});

		return data;
	}
);

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		logOut: state => {
			state.token = null;
			state.error = null;
			state.loading = false;
		},
	},
	extraReducers: builder => {
		builder
			.addCase(signIn.pending, state => {
				state.loading = true;
			})
			.addCase(signIn.fulfilled, (state, action) => {
				state.token = action.payload as string | null;
				state.loading = false;
				state.error = null;
			})
			.addCase(signIn.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload as string | null;
			});
	},
});
