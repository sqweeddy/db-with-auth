import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { AuthState } from "./authSlice";

interface Body {
    email: string,
    password: string
}

export const fetchToken = createAsyncThunk(
  'auth/fetchToken',
  async (body: Body, thunkAPI) => {
      try {
          const response = await axios.post<AuthState>('https://reqres.in/api/login', body)
          return response.data;
      } catch (e) {
          return thunkAPI.rejectWithValue("Авторизация не удалась")
      }
  }
)
