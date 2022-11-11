import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchToken } from "./authAPI";

export interface AuthState {
  token: string,
  isAuth: boolean,
  isLoading: boolean,
  authError: string,
}

const storage = window.localStorage;
const token = storage.getItem('sqweeddyToken');
const storageToken =  token ? token : '';
const auth = token ? true : false;

const initialState: AuthState = {
  token: storageToken,
  isAuth: auth,
  isLoading: false,
  authError: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.isAuth = false;
      state.authError = ''
      state.token = '';
      storage.removeItem('sqweeddyToken');
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchToken.fulfilled, (state, action: PayloadAction<AuthState>) => {
        state.isLoading = false;
        state.isAuth = true;
        state.authError = ''
        state.token = action.payload.token;
        storage.setItem('sqweeddyToken', action.payload.token)
      })
      .addCase(fetchToken.pending, (state ) => {
        state.isLoading = true;
      })
      .addCase(fetchToken.rejected, (state) => {
        state.isLoading = false;
        state.authError = "Не верный логин или пароль"
      })
}
});


export const { logout } = authSlice.actions;
export default authSlice.reducer;