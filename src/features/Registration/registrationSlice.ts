import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchRegistrationToken } from "./registrationAPI";

export interface RegisterState {
  token: string,
  isLoading: boolean,
  error: string
}

const initialState: RegisterState = {
  token: '',
  isLoading: false,
  error: '',
};

export const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    clearData: (state) => {
      state.error='';
      state.token=''
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRegistrationToken.fulfilled, (state, action: PayloadAction<RegisterState>) => {
        state.isLoading = false;
        state.error = ''
        state.token = action.payload.token;
      })
      .addCase(fetchRegistrationToken.pending, (state ) => {
        state.isLoading = true;
      })
      .addCase(fetchRegistrationToken.rejected, (state) => {
        state.isLoading = false;
        state.error = "Ошибка при регистрации"
      })
}
});


export const { clearData } = registerSlice.actions;
export default registerSlice.reducer;